#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import pika

# Iniciando conexão
connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
channel = connection.channel()

# Definindo fila
channel.queue_declare(queue='hello')

# Realizando envio
channel.basic_publish(
    exchange='',
    routing_key='hello',
    body='Hello World!'
)
connection.close()
