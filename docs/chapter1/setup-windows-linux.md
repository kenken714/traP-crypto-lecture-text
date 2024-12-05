# 環境構築 (Windows, Linux)

講習会で用いる環境の構築をします。既に導入されている部分は飛ばしてください。

## WSL のインストール (Windowsのみ)

Windows 上で Linux を動作させるために、Windows Subsystem for Linux (WSL) をインストールします。

[プログラミング基礎講習会資料](https://pg-basic.trap.show/text/chapter-0/enviroment/windows.html#step-1-install-wsl) の Step 1.「Install WSL」を参考にインストールしてください。

この先の手順は、全て WSL 上で実行してください。

## 各種ツールの導入

### Python 3 と pip のインストール

この講習会で用いるプログラミング言語 Python 3 と、パッケージ管理ツールである pip をインストールします。

```bash
sudo apt update
sudo apt-get install python3
sudo apt-get install python3-pip
```

### PyCryptodome のインストール

Python で暗号関連の処理を行うためのライブラリである PyCryptodome をインストールします。

```bash
pip3 install pycryptodome
```

### SageMath のインストール

数学的な処理を行うためのソフトウェアである SageMath をインストールします。

```bash
sudo apt-get install sagemath
```

### OpenSSL のインストール

暗号関連の処理を行うためのライブラリである OpenSSL をインストールします。

```bash
sudo apt-get install openssl
```

## その他サイト

環境構築は以上で終わりですが、Crypto の問題を解く時によく使うサイトを紹介します。本講習会中にも使うことがあります。

- [CyberChef](https://gchq.github.io/CyberChef/)
  - 暗号解読やデータ変換を行うためのツールです。様々な処理を組み合わせて、問題を解いていきます。
- [dcode.fr](https://www.dcode.fr/)
  - 暗号解読や数学問題の解法を提供しています。問題の解き方を知りたいときに参考にしてください。
- [factorDB](http://factordb.com/)
  - 素因数分解を行うためのサイトです。RSA 暗号の解読などに使います。