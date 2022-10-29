--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: hashtag; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.hashtag (
    id integer NOT NULL,
    name character varying(50) NOT NULL
);


--
-- Name: hashtag_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.hashtag_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: hashtag_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.hashtag_id_seq OWNED BY public.hashtag.id;


--
-- Name: hashtagsPublication; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."hashtagsPublication" (
    id integer NOT NULL,
    "publicationId" integer NOT NULL,
    "hashtagId" integer NOT NULL
);


--
-- Name: hashtagsPublication_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."hashtagsPublication_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: hashtagsPublication_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."hashtagsPublication_id_seq" OWNED BY public."hashtagsPublication".id;


--
-- Name: likes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.likes (
    id integer NOT NULL,
    "publicationId" integer NOT NULL,
    "userId" integer NOT NULL
);


--
-- Name: likes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.likes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: likes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.likes_id_seq OWNED BY public.likes.id;


--
-- Name: publications; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.publications (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    link text NOT NULL,
    description character varying(255)
);


--
-- Name: publications_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.publications_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: publications_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.publications_id_seq OWNED BY public.publications.id;


--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    token character varying(36) NOT NULL,
    "activeToken" boolean DEFAULT true NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    image text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: hashtag id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.hashtag ALTER COLUMN id SET DEFAULT nextval('public.hashtag_id_seq'::regclass);


--
-- Name: hashtagsPublication id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."hashtagsPublication" ALTER COLUMN id SET DEFAULT nextval('public."hashtagsPublication_id_seq"'::regclass);


--
-- Name: likes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.likes ALTER COLUMN id SET DEFAULT nextval('public.likes_id_seq'::regclass);


--
-- Name: publications id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.publications ALTER COLUMN id SET DEFAULT nextval('public.publications_id_seq'::regclass);


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: hashtag; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.hashtag VALUES (1, 'sql');


--
-- Data for Name: hashtagsPublication; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: likes; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: publications; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.publications VALUES (5, 1, 'https://www.youtube.com/watch?v=CLeZyIID9Bo', NULL);
INSERT INTO public.publications VALUES (6, 1, 'https://www.youtube.com/watch?v=CLeZyIID9Bo', NULL);
INSERT INTO public.publications VALUES (7, 1, 'https://www.youtube.com/watch?v=CLeZyIID9Bo', 'link do youtube');
INSERT INTO public.publications VALUES (8, 1, 'https://www.youtube.com/watch?v=CLeZyIID9Bo', 'lo-fi pra nos');
INSERT INTO public.publications VALUES (12, 1, 'https://www.petz.com.br/blog/wp-content/uploads/2017/09/tudo-sobre-porquinho-da-india.jpg', 'porquinho');
INSERT INTO public.publications VALUES (13, 1, 'https://www.petz.com.br/blog/wp-content/uploads/2017/09/tudo-sobre-porquinho-da-india.jpg', '');
INSERT INTO public.publications VALUES (14, 1, 'https://www.petz.com.br/blog/wp-content/uploads/2017/09/tudo-sobre-porquinho-da-india.jpg', '');
INSERT INTO public.publications VALUES (15, 1, 'https://www.petz.com.br/blog/wp-content/uploads/2017/09/tudo-sobre-porquinho-da-india.jpg', '');
INSERT INTO public.publications VALUES (16, 1, 'https://www.petz.com.br/blog/wp-content/uploads/2017/09/tudo-sobre-porquinho-da-india.jpg', '''');
INSERT INTO public.publications VALUES (17, 1, 'https://www.petz.com.br/blog/wp-content/uploads/2017/09/tudo-sobre-porquinho-da-india.jpg', '');
INSERT INTO public.publications VALUES (18, 5, 'https://static1.purebreak.com.br/articles/5/85/10/5/@/317506--bob-esponja-calca-quadrada-e-as-maiore-amp_article_image-2.jpg', NULL);
INSERT INTO public.publications VALUES (19, 5, 'https://www.youtube.com', 'assistir');
INSERT INTO public.publications VALUES (21, 5, 'https://www.youtube.com', 'assistir');
INSERT INTO public.publications VALUES (22, 1, 'https://www.cifraclub.com.br/', 'aprender a tocar violão');
INSERT INTO public.publications VALUES (23, 1, 'https://www.cifraclub.com.br/', 'aprender a tocar violão');


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, 2, 'token3', true);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'jansen', 'jansen@email.com', 'https://www.essemundoenosso.com.br/wp-content/uploads/2015/03/porquinho-da-india-dest.jpg', '123', '2022-10-20 19:01:48.291374');
INSERT INTO public.users VALUES (2, 'Francine', 'fran_fran@email.com', 'https://meups.com.br/wp-content/uploads/2020/04/Freya.jpg', 'freya123', '2022-10-20 21:08:26.125264');
INSERT INTO public.users VALUES (3, 'caik', 'caik@email.com', 'https://static1.purebreak.com.br/articles/5/85/10/5/@/317506--bob-esponja-calca-quadrada-e-as-maiore-amp_article_image-2.jpg', '123', '2022-10-22 20:24:21.761883');
INSERT INTO public.users VALUES (5, 'julia', 'julia@email.com', 'https://static1.purebreak.com.br/articles/5/85/10/5/@/317506--bob-esponja-calca-quadrada-e-as-maiore-amp_article_image-2.jpg', '123', '2022-10-22 20:31:17.319831');


--
-- Name: hashtag_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.hashtag_id_seq', 1, true);


--
-- Name: hashtagsPublication_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."hashtagsPublication_id_seq"', 1, false);


--
-- Name: likes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.likes_id_seq', 1, false);


--
-- Name: publications_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.publications_id_seq', 23, true);


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 1, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 5, true);


--
-- Name: hashtag hashtag_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.hashtag
    ADD CONSTRAINT hashtag_name_key UNIQUE (name);


--
-- Name: hashtag hashtag_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.hashtag
    ADD CONSTRAINT hashtag_pk PRIMARY KEY (id);


--
-- Name: hashtagsPublication hashtagsPublication_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."hashtagsPublication"
    ADD CONSTRAINT "hashtagsPublication_pkey" PRIMARY KEY (id);


--
-- Name: likes likes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_pkey PRIMARY KEY (id);


--
-- Name: publications publications_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.publications
    ADD CONSTRAINT publications_pk PRIMARY KEY (id);


--
-- Name: sessions sessions_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pk PRIMARY KEY (id);


--
-- Name: sessions sessions_token_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_token_key UNIQUE (token);


--
-- Name: sessions sessions_userId_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_key" UNIQUE ("userId");


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: hashtagsPublication hashtagsPublication_hashtagId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."hashtagsPublication"
    ADD CONSTRAINT "hashtagsPublication_hashtagId_fkey" FOREIGN KEY ("hashtagId") REFERENCES public.hashtag(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: hashtagsPublication hashtagsPublication_publicationId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."hashtagsPublication"
    ADD CONSTRAINT "hashtagsPublication_publicationId_fkey" FOREIGN KEY ("publicationId") REFERENCES public.publications(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: likes likes_publicationId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT "likes_publicationId_fkey" FOREIGN KEY ("publicationId") REFERENCES public.publications(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: likes likes_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT "likes_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: publications publications_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.publications
    ADD CONSTRAINT publications_fk0 FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: publications publications_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.publications
    ADD CONSTRAINT "publications_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: sessions sessions_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_fk0 FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

