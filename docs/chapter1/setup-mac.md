# 環境構築 (macOS)

講習会で用いる環境の構築をします。既に導入されている部分は飛ばしてください。

## 各種ツールの導入

### Homebrew のインストール

パッケージ管理ツールである Homebrew をインストールします。

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Python 3 と pip のインストール

この講習会で用いるプログラミング言語 Python 3 と、パッケージ管理ツールである pip をインストールします。

```bash
$ brew install python
```

### PyCryptodome のインストール

Crypto で頻繁に用いられる暗号ライブラリ PyCryptodome をインストールします。

```bash
pip3 install pycryptodome
```

### SageMath のインストール

Python で数学処理をするアプリケーションである SageMath をインストールします。

```bash
sudo apt-get install sagemath
```

### OpenSSL のインストール

暗号アルゴリズムの様々な実装を提供する OpenSSL をインストールします。

```bash
sudo apt-get install openssl
```

## その他サイト

環境構築は以上で終わりですが、Crypto の問題を解く時によく使うサイトを紹介します。本講習会中にも使うことがあります。

- [CyberChef](https://gchq.github.io/CyberChef/)
  - ハッシュや文字コードの変換などの操作、暗号の解読などができるサイトです。
- [dcode.fr](https://www.dcode.fr/)
  - CyberChef と同様に様々な操作ができるサイトです。とくに古典暗号の解読に便利です。
- [factorDB](http://factordb.com/)
  - あらゆる整数の素因数分解が登録されているサイトです。有名な数の場合は、これで一発で素因数分解が分かることがあります。
