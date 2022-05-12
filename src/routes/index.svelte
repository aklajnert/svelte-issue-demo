<h1>Working routes</h1>
<ul>
    <li><a href="/working">/working</a></li>
    <li><a href="/not-working">/not-working</a></li>
    <li><a href="/working/test">/working/test</a></li>
    <li><a href="/working/test/deeper">/working/test/deeper</a></li>
    <li><a href="/working/foo">/working/foo</a></li>
    <li><a href="/working/foo/deeper">/working/foo/deeper</a></li>
    <li>Basically anything under `/working`</li>
</ul>

<h1>Not working routes (in nginx)</h1>
<ul>
    <li><a href="/not-working/test">/not-working/test</a></li>
    <li><a href="/not-working/test/deeper">/not-working/test/deeper</a></li>
    <li><a href="/not-working/foo">/not-working/foo</a></li>
    <li><a href="/not-working/foo/deeper">/not-working/foo/deeper</a></li>
    <li>Basically anything under `/not-working` (except `/not-working` itself)</li>
</ul>

<p>Everything works fine, when you run <b>npm run dev</b> and visit <a href="http://localhost:3000">localhost:3000</a></p>
<p>Run <b>docker-compose up</b>, and visit <a href="http://localhost:8000">localhost:8000</a> to see the problem.</p>
