#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import pika
import sys

# Iniciando conexão
connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
channel = connection.channel()

# Definindo exchange
channel.exchange_declare(exchange='topic_logs',
                         exchange_type='topic')

# Realizando envio
routing_key = sys.argv[1] if len(sys.argv) > 1 else 'anonymous.info'
message = ' '.join(sys.argv[2:]) or "Hello World!"
channel.basic_publish(
    exchange='topic_logs',
    routing_key=routing_key,
    body=message,
    properties=pika.BasicProperties(
        delivery_mode = 2, # make message persistent
    )
)
connection.close()
