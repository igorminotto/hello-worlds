import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';
import 'package:random_words/wordsList.dart';

import 'styles/textStyles.dart';

class RandomWords extends StatefulWidget {
  @override
  _RandomWordsState createState() => _RandomWordsState();
}

class _RandomWordsState extends State<RandomWords> {
  final List<WordPair> _suggestions = <WordPair>[];
  final Set<WordPair> _saved = Set<WordPair>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Random Words'),
        actions: <Widget>[
          IconButton(icon: Icon(Icons.list), onPressed: _pushSaved),
        ],
      ),
      body: Center(
        child: this._buildSuggestions()
      )
    );
  }

  void _pushSaved() {
    Navigator.of(context).push(
      MaterialPageRoute<void>(
        builder: (BuildContext context) => WordsList(_saved),
      ),  
    );
  }

  Widget _buildSuggestions() {
    return GridView.builder(
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
        childAspectRatio: 2.5,
      ),
      padding: const EdgeInsets.all(16),
      itemBuilder: (BuildContext _context, int index) {
        if (index >= _suggestions.length) {
          _suggestions.addAll(generateWordPairs().take(10));
        }

        return _buildRow(_suggestions[index]);
      }
    );
  }

  Widget _buildRow(WordPair pair) {
    final bool alreadySaved = _saved.contains(pair);

    return Card(
      child: ListTile(
        title: Text(
          pair.asPascalCase,
          style: biggerFont,
        ),
        trailing: Icon(
          alreadySaved ? Icons.favorite : Icons.favorite_border,
          color: alreadySaved ? Colors.red[300] : null,
        ),
        onTap: () {
          setState(() {
            alreadySaved ? _saved.remove(pair) : _saved.add(pair);
          });
        },
      ),
    );
  }
}
