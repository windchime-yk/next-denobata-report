import { PageProps } from "$fresh/server.ts";
import { Heading } from "../../components/Heading.tsx";
import { Layout } from "../../components/Layout.tsx";
import { TextLink } from "../../components/Link.tsx";

export default function Report({ params, url }: PageProps) {
  return (
    <Layout
      title="サンプル用レポート"
      description="これはサンプル用のレポートです"
      type="article"
      url={url}
    >
      <Heading level={2}>Denoばた会議 Monthly 第{params.count}回</Heading>
      <div class="flex gap-3">
        <time dateTime="2021-09-19">2021年9月19日開催</time>
        <TextLink
          css="underline"
          href="https://deno-ja.connpass.com/event/223503/"
          external
        >
          connpassリンク
        </TextLink>
      </div>
      <div
        class="mt-12"
        style={{
          position: "relative",
          paddingBottom: "56.25%",
          height: 0,
          overflow: "hidden",
        }}
      >
        <iframe
          title="Denoばた会議 Monthly レポート"
          allow="fullscreen"
          src="https://uki00a.github.io/slides/denobata-2021-09-19"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div class="mt-12 markdown-body">
        <h3 id="今月のアップデートを追う">今月のアップデートを追う</h3>
        <p>
          Denoのアップデートを追っていくLT。<br />そのあとの雑談込みでザックリと箇条書き。
        </p>
        <h4 id="deno-v2.0のリリースプラン">
          <a
            href="https://github.com/denoland/deno/issues/12110"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deno v2.0のリリースプラン
          </a>
        </h4>
        <ul>
          <li>今年の11月にリリース予定</li>
          <li>
            JSのみで実装されたI/O関係は削除（一部APIはすでにstd/ioに移行済み）
          </li>
          <li>
            <code>tsconfig.json</code>をCLIに設定する<code>
              --config
            </code>オプション削除
            <ul>
              <li>オレオレ設定がなくなる</li>
              <li>jsx周りがいじくれなくなる？</li>
            </ul>
          </li>
          <li>
            <a
              href="https://github.com/denoland/deno/issues/11971"
              target="_blank"
              rel="noopener noreferrer"
            >
              lockファイルをデフォルトにする提案
            </a>
            <ul>
              <li>
                <a
                  href="https://deno.land/manual/linking_to_external_code/integrity_checking"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Denoのlockファイルについて
                </a>
              </li>
            </ul>
          </li>
          <li>
            <code>--allow-import</code>オプションの追加（dynamic
            importsやworkersが対象）
            <ul>
              <li>
                現状は<code>
                  --allow-read
                </code>を使ってサンドボックスを開放している
              </li>
            </ul>
          </li>
        </ul>
        <h4 id="デフォルトで型チェックをオフにする提案">
          <a
            href="https://github.com/denoland/deno/issues/11340"
            target="_blank"
            rel="noopener noreferrer"
          >
            デフォルトで型チェックをオフにする提案
          </a>
        </h4>
        <ul>
          <li>提案理由は「型チェックで怒られるのは楽しくないから」？</li>
        </ul>
        <h4 id="deno-v1.13">Deno v1.13</h4>
        <h5 id="deno.servehttpが安定化">Deno.serveHTTPが安定化</h5>
        <ul>
          <li>
            <code>--unstable</code>なしで利用可能
          </li>
          <li>ちょっと書き方は煩わしい</li>
          <li>ちゃんとしたければフレームワークを使う感じになりそう</li>
        </ul>
        <h5 id="プラグインシステムが削除、代わりとしてffiを導入">
          プラグインシステムが削除、代わりとしてFFIを導入
        </h5>
        <ul>
          <li>
            FFIを雑に表すと「DLLの関数を呼べる一般的な規格」（<a
              href="https://ja.wikipedia.org/wiki/Foreign_function_interface"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wikipedia
            </a>）
          </li>
          <li>
            <a
              href="https://github.com/denoland/deno/pull/11152"
              target="_blank"
              rel="noopener noreferrer"
            >
              deno_webviewの作者が出した提案
            </a>
          </li>
        </ul>
        <h5 id="deno-test---doc-でmarkdown内のコードテストが可能に">
          <code>deno test --doc</code>でMarkdown内のコードテストが可能に
        </h5>
        <ul>
          <li>
            <a
              href="https://doc.rust-lang.org/rust-by-example/testing/doc_testing.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rustには既にある
            </a>
          </li>
        </ul>
        <h5 id="casperさんについて">Casperさんについて</h5>
        <ul>
          <li>
            フルタイムでOSSコントリビュートしていて、Denoにも多くのコントリビュートをしている
          </li>
          <li>
            Webブラウザで<code>deno test</code>する<a
              href="https://deno.land/x/sponsor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sponsor
            </a>を開発
          </li>
          <li>いつまでも いるとおもうな こんとりびゅーたー</li>
        </ul>
        <h5 id="importに拡張子なしを許容しないか？-とryanから提案があった">
          importに拡張子なしを許容しないか？ とRyanから提案があった
        </h5>
        <ul>
          <li>
            <a
              href="https://github.com/denoland/deno/discussions/12108"
              target="_blank"
              rel="noopener noreferrer"
            >
              2021/09/16のミーティング内容
            </a>
          </li>
          <li>
            tensorflowを利用するときにエラーが出て、拡張子をつければ解決しそうだったため提案があったとのこと
          </li>
        </ul>
        <h3 id="lt1">LT1</h3>
        <p>
          @kawarimidollさんによるDenoの利用者側としてのLT。<br />そのあとの雑談込みでザックリと箇条書き。
        </p>
        <h4 id="deno製のアプリやサービスを多く開発">
          Deno製のアプリやサービスを多く開発
        </h4>
        <ul>
          <li>
            <a
              href="https://github.com/kawarimidoll/typograssy"
              target="_blank"
              rel="noopener noreferrer"
            >
              typograssy
            </a>
          </li>
          <li>
            <a
              href="https://github.com/kawarimidoll/deno-github-contributions-api"
              target="_blank"
              rel="noopener noreferrer"
            >
              deno-github-contributions-api
            </a>
            <ul>
              <li>
                <a
                  href="https://twitter.com/deno_land/status/1420387162206478340"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deno公式Twitterアカウントでも紹介されました
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="https://github.com/kawarimidoll/pax.deno.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              pax.deno.dev
            </a>
          </li>
          <li>
            <a
              href="https://github.com/kawarimidoll/deno-diplodocus"
              target="_blank"
              rel="noopener noreferrer"
            >
              Diplodocus
            </a>
          </li>
        </ul>
        <h4 id="アフタートーク">アフタートーク</h4>
        <ul>
          <li>
            <a
              href="https://zenn.dev/topics/deno"
              target="_blank"
              rel="noopener noreferrer"
            >
              zennのDenoカテゴリ
            </a>でもかなりの投稿あり
          </li>
          <li>DiplodocusでreadFile使うようにしたい</li>
          <li>
            <a
              href="https://github.com/lucacasonato/dext.ts"
              target="_blank"
              rel="noopener noreferrer"
            >
              dext.ts
            </a>
            <ul>
              <li>Deno製のPreactフレームワーク</li>
            </ul>
          </li>
          <li>
            Deno DeployのreadFile対応
            <ul>
              <li>特にアナウンスなかった記憶</li>
              <li>
                実装したのは<a
                  href="https://github.com/satyarohith"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  この方
                </a>
                <ul>
                  <li>
                    <a
                      href="https://github.com/satyarohith/sift"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Sift
                    </a>というDeno
                    Deployのルーティングとユーティリティライブラリの制作者でもある
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <h3 id="lt2">LT2</h3>
        <p>発表者がいなかったので、このまま雑談続行。</p>
        <h4 id="denoのweb-apiをかなり実装された方について">
          DenoのWeb APIをかなり実装された方について
        </h4>
        <ul>
          <li>
            <a
              href="https://github.com/crowlKats"
              target="_blank"
              rel="noopener noreferrer"
            >
              この方
            </a>
          </li>
          <li>
            <a
              href="https://github.com/denoland/deno/pull/7977"
              target="_blank"
              rel="noopener noreferrer"
            >
              WebGPUの実装
            </a>とか
          </li>
        </ul>
        <h4 id="rustのv8-について">
          <a
            href="https://github.com/denoland/rusty_v8"
            target="_blank"
            rel="noopener noreferrer"
          >
            RustのV8
          </a>について
        </h4>
        <ul>
          <li>
            <p>C++のV8をラップしてる</p>
          </li>
          <li>
            <p>
              <a
                href="https://speakerdeck.com/jlkiri/node-dot-js-in-rust-how-to-do-it-and-what-to-expect-from-it"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rust.TokyoのスポンサーLT
              </a>でV8の話の中でDenoが出たが、Nodeの資産を使いたいなどの理由でNodeが使われた？（完全にうろ覚え）
            </p>

            <ul>
              <li>
                <a
                  href="https://speakerdeck.com/jlkiri/node-dot-js-in-rust-how-to-do-it-and-what-to-expect-from-it?slide=37"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ここでもFFIが出てる
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <h4 id="swcとesbuildのシェア争いについて">
          SWCとesbuildのシェア争いについて
        </h4>
        <ul>
          <li>
            <a
              href="https://github.com/alephjs/aleph.js"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aleph.js
            </a>はSWCとesbuildの併用
          </li>
          <li>
            <a
              href="https://github.com/kt3k/packup"
              target="_blank"
              rel="noopener noreferrer"
            >
              packup
            </a>はesbuildのwasmを利用
          </li>
          <li>まだ雌雄を決するには早い……！</li>
        </ul>
        <h4 id="goのwasmが扱いづらいのは何故？">
          Goのwasmが扱いづらいのは何故？
        </h4>
        <ul>
          <li>アプリケーションを書くことしか想定してない</li>
          <li>
            <a
              href="https://github.com/golang/go/blob/master/misc/wasm/wasm_exec.js"
              target="_blank"
              rel="noopener noreferrer"
            >
              wasm_exec.js
            </a>という巨大なグルーコードが必要
          </li>
          <li>最低1.4MBくらいと、そもそもファイルサイズが巨大</li>
          <li>GCとかもろもろ含んでいて、ポータビリティがよくない</li>
          <li>関数単位のexportができない</li>
          <li>
            普通に使うとmain関数からすぐに抜けてしまうため、<code>
              select {}
            </code>をmain関数に書くようなハックが必要
          </li>
          <li>
            <a
              href="https://github.com/tinygo-org/tinygo"
              target="_blank"
              rel="noopener noreferrer"
            >
              TinyGo
            </a>のwasmは関数単位のexportが出来るのでまだ使いやすい
          </li>
        </ul>
        <h3 id="アフタートーク">アフタートーク</h3>
        <p>アップデートを追うのスライドの続き。</p>
        <h4 id="deno-v1.13">Deno v1.13</h4>
        <h5 id="structuredcloneに対応">structuredCloneに対応</h5>
        <ul>
          <li>実はまだDenoしか対応してない</li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/structuredClone"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDN
            </a>
          </li>
          <li>
            <a
              href="https://html.spec.whatwg.org/multipage/structured-data.html#dom-structuredclone"
              target="_blank"
              rel="noopener noreferrer"
            >
              WHATWG Spec
            </a>
          </li>
          <li>Web標準（Denoだけ）</li>
        </ul>
        <h5 id="deno.writefileでabortsignal対応">
          Deno.writeFileでAbortSignal対応
        </h5>
        <h5 id="--unsafely-treat-insecure-origin-as-secure-オプションサポート">
          <code>
            --unsafely-treat-insecure-origin-as-secure
          </code>オプションサポート
        </h5>
        <ul>
          <li>長い！！</li>
          <li>オレオレ証明書を防げる</li>
          <li>
            <code>
              __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            </code>的なアレ<h5 id="v8-v9.3へのアップデート">
              V8 v9.3へのアップデート
            </h5>
          </li>
          <li>
            <a
              href="https://github.com/tc39/proposal-accessible-object-hasownproperty"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code>Object.hasOwn</code>
            </a>
          </li>
        </ul>
        <h4 id="collectionモジュールについて">Collectionモジュールについて</h4>
        <ul>
          <li>underscoreみたいな標準モジュール</li>
          <li>
            <a
              href="https://github.com/denoland/deno_std/discussions/970"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kotlin畑の人から提案があった
            </a>
          </li>
          <li>
            JavaScriptのメソッドで代用可能なものもあったので白熱した議論があり、徐々に洗練されていった
          </li>
          <li>
            <a
              href="https://github.com/denoland/deno_std/pull/1166"
              target="_blank"
              rel="noopener noreferrer"
            >
              singleというプロパティは議論の末findSingleに
            </a>
          </li>
        </ul>
        <h4 id="denoのサードパーティモジュールについて">
          Denoのサードパーティモジュールについて
        </h4>
        <ul>
          <li>
            <a
              href="https://github.com/nestdotland/deno_swc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deno製のSWC
            </a>
          </li>
          <li>
            もう一つのDeno x React、<a
              href="https://github.com/exhibitionist-digital/ultra"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ultra
            </a>
            <ul>
              <li>メモリに問題あり、Deno Deployの256MBを超過した</li>
              <li>
                256MB制限を緩和してほしいとお願いして、一律で上げてもらった
              </li>
            </ul>
          </li>
          <li>
            <a
              href="https://github.com/tw-in-js/twind"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twind
            </a>
          </li>
        </ul>
        <h4 id="denoへの提案について">Denoへの提案について</h4>
        <ul>
          <li>
            <a
              href="https://github.com/denoland/deno_lint/pull/838"
              target="_blank"
              rel="noopener noreferrer"
            >
              deno_lintにjsxが追加される提案があった
            </a>
          </li>
        </ul>
        <h4 id="romeについて">Romeについて</h4>
        <p>開発基盤がRustになった。</p>
      </div>
    </Layout>
  );
}
