#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import pika

# Iniciando conexão
connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
channel = connection.channel()

# Definindo fila
channel.queue_declare(queue='hello')


def callback(ch, method, properties, body):
    print(" [x] Received %r" % body)


channel.basic_consume(
    queue='hello',
    on_message_callback=callback,
    auto_ack=True
)
channel.start_consuming()
