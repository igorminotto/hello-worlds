import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';

import 'styles/textStyles.dart';

class WordsList extends StatelessWidget {
  final Set<WordPair> words;

  const WordsList(this.words);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Center(child: Text('Saved Suggestions')),
      ),
      body: ListView(
        children: dividedList(context)
      ),
    );
  }

  List<Widget> dividedList(BuildContext context) {
    return ListTile
      .divideTiles(
        context: context,
        tiles: wordTiles(),
      )
      .toList();
  }

  Iterable<ListTile> wordTiles() {
    final wordList = words.toList();

    wordList.sort((a, b) => a.toString().compareTo( b.toString() ));

    return wordList.map(
      (WordPair pair) {
        return ListTile(
          title: Text(
            pair.asPascalCase,
            style: biggerFont,
          ),
        );
      },
    );
  }
}
