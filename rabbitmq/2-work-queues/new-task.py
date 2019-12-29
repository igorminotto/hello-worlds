#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import pika
import sys

# Iniciando conexão
connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
channel = connection.channel()

# Definindo fila
channel.queue_declare(queue='task_queue', durable=True)

# Realizando envio
message = ' '.join(sys.argv[1:]) or "Hello World!"
channel.basic_publish(
    exchange='',
    routing_key='task_queue',
    body=message,
    properties=pika.BasicProperties(
        delivery_mode = 2, # make message persistent
    )
)
connection.close()
