#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import pika
import sys

# Iniciando conexão
connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
channel = connection.channel()

# Definindo exchange
channel.exchange_declare(exchange='direct_logs',
                         exchange_type='direct')

# Definindo fila temporaria
result = channel.queue_declare('', exclusive=True)
queue_name = result.method.queue

# Associando fila ao exchange
severities = sys.argv[1:]
for severity in severities:
    channel.queue_bind(exchange='direct_logs',
                       queue=queue_name,
                       routing_key=severity)

def callback(ch, method, properties, body):
    print(" [x] Received %r" % body)

channel.basic_consume(
    queue=queue_name,
    on_message_callback=callback,
    auto_ack=True
)
channel.start_consuming()
