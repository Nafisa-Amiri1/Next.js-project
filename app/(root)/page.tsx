import ROUTES from '@/constants/routes';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';
import LocalSearch from '@/components/search/LocalSearch'

const questions = [
  {
    _id: 1,
    title: 'How to learn React?',
    description: 'I am new to web development and want to learn React. Any suggestions?',
    tags: [
      { _id: '1', name: 'react' },
      { _id: '2', name: 'javascript' }
    ],
    auther: { _id: "1", name: "John Doe" },
    upvotes: 10,
    answers: 5,  
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: 2,
    title: 'How to learn JavaScript?',
    description: 'I am new to web development and want to learn React. Any suggestions?',
    tags: [
      { _id: '1', name: 'react' },
      { _id: '2', name: 'javascript' }
    ],
    auther: { _id: "1", name: "John Doe" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
]

interface SearchParams{
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({searchParams}: SearchParams) => {
  const { query = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(query?.toLowerCase())
  );

  
  return (
    <>
      <section className="flex w-full flex-col-reverse 
      justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="font-bold text-3xl">All Questions</h1>

        <Button className='btn-primary-gradient min-h-[46px]  px-4 py-3 text-black dark:text-white' asChild>
          <Link href={ROUTES.ASK_QUESTUIN}>Ask a Question</Link>
        </Button>
      </section>

      <section className="mt-11">
        <LocalSearch
          route='/'
          imgSrc="/icon/search.png"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
      </section>
      HomeFilter
      <div className='mt-10 flex w-full flex-col gap-6'>
        {filteredQuestions.map((question) => (
          <h1 key={question._id}>{question.title}</h1>
        ))}
      </div>

    </>
  );

};
export default Home;