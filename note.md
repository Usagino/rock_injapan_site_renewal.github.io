# テンプレート日誌
---
#### 2018/06/09
```
pug index.pug --pretty --watch
```
で監視し続けて変更があればコンパイル

```
coffee script/script.coffee -c
```
でも同様にcoffeeをコンパイルしてくれる..かもしれない


---
#### 2018/06/10
**git使い方**

最初に指定のファイルまで移動し```$ git init```コマンドを使う

次に共有するファイルを選択する。

```$ git add index.html```

次に、
```$ git commit -m "任意のメッセージ```
コミットするメッセージを追加(わかりやすいメッセージで)


```$ git remote add remote(リモート名) http://(リモートのURL)```

これでリモートを繋げる。

```$ git push origin master```

リモートにファイルをアップロード

```$ git pull origin master```


リモートからファイルをダウンロード

---
#### 2018/06/10
***用語集***
ステージする -> ```git add``` のこと

***pugの画像を繰り返し処理***

```pug
each val in [1, 2, 3, 4, 5]
  div= val
  img(src="material/issue_"+val+".png")
```
とすることで画像を繰り返し処理で挿入可能

---
#### 2018/06/12
***positionについて、CSS***

```position:static;```
- CSSに何も指定していなければこれが指定される
- 上下左右に動かすことはできない
- ```top```や```left```で指定することもできない
- 要素の重なりを指定できない

```position:relative;```
- 現在の表示位置を相対的に要素を動かせる
- ```position:relative;```としても、```top```や```bottom```を指定しなければ```static```と同じ位置に表示されます。そのため一見同じように感じられますが、①位置調整の可否や②```z-index```指定の可否という違いがあります。「```z-index```や```top```などが指定できないときは```relative```にする！」とおぼえておくと良いでしょう。

```position:absolute;```
- ```position: absolute```を使うとデザインの幅がぐっと広がるので、使い方を覚えておくことをおすすめします。
- 親要素は```relative```にしておく。```absolute```を使って位置調整するときは、親要素に```position:relative```（もしくは```fixed```）を指定しておきましょう。これを忘れると基準位置がずれて思ったように表示されません。```absolute```を使うときは、おまじないのように親要素もセットで変えるようにしましょう。


---
