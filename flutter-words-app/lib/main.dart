import 'package:flutter/material.dart';

import 'randomWords.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Words',
      theme: ThemeData(
        primaryColor: Colors.white
      ),
      home: new RandomWords()
    );
  }
}
