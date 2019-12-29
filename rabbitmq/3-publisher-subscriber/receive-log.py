#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import pika
import time

# Iniciando conexão
connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
channel = connection.channel()

# Definindo exchange
channel.exchange_declare(exchange='logs', exchange_type='fanout')

# Definindo fila temporaria
result = channel.queue_declare('', exclusive=True)
queue_name = result.method.queue

# Associando fila ao exchange
channel.queue_bind(exchange='logs',
                   queue=queue_name)

def callback(ch, method, properties, body):
    print(" [x] Received %r" % body)

channel.basic_consume(
    queue=queue_name,
    on_message_callback=callback,
    auto_ack=True
)
channel.start_consuming()
