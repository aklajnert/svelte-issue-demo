Everything works fine, when you run `npm run dev` and visit [http://localhost:3000](localhost:3000).  
Run `docker-compose up`, and visit [http://localhost:8000](localhost:8000) to see the problem.

# Working routes

- [/working](/working)
- [/not-working](/not-working)
- [/working/test](/working/test)
- [/working/test/deeper](/working/test/deeper)
- [/working/foo](/working/foo)
- [/working/foo/deeper](/working/foo/deeper)
- Basically anything under `/working`


# Not working routes (in nginx)
- [/not-working/test](/not-working/test)
- [/not-working/test/deeper](/not-working/test/deeper)
- [/not-working/foo](/not-working/foo)
- [/not-working/foo/deeper](/not-working/foo/deeper)
- Basically anything under `/not-working` (except `/not-working` itself)