import React from 'react'
import Card from "../../components/CardTemplate.js"
import CardColapsable from "../../components/CardColapsable.js"

const cd1=[
  {
    id:1,
    text:"The discipline of computer science was born in the early 1940s with the confluence of algorithm theory, mathematical logic, and the invention of the stored-program electronic computer."
  },
  {
    id:2,
    text:"the early 1960s, there was a sufficient body of knowledge to merit the first academic departments and degree programs."
  }
];
const cd2=[
  {
    id:1,
    text:"Computer Engineering - Typically involves software and hardware and the development of systems that 	involve software, hardware, and communications."
  },
  {
    id:2,
    text:"Computer Science - Currently the most popular of the computing disciplines; tends to be relatively broad and with an emphasis on the underlying science aspects."
  },
  {
    id:3,
    text:"Information Systems - Essentially, this is computing in an organizational context, typically in businesses."
  },
  {
    id:4,
    text:"Information Technology - Focuses on computing infrastructure and needs of individual users; tends to involve a study of systems (perhaps just software systems, but perhaps also systems in support of learning, of information 	dissemination, etc.)."
  },
  {
    id:5,
    text:"Information Technology - Focuses on computing infrastructure and needs of individual users; tends to involve a study of systems (perhaps just software systems, but perhaps also systems in support of learning, of information 	dissemination, etc.)."
  },
]

const descs = cd1.map(data =>
  <li key={data.id}>{data.text}</li>
);

const descs2 = cd2.map(data =>
  <li key={data.id}>{data.text}</li>
);
const HistoryOfCS = () => {
  return (
    <>
      <Card
        title="History of computer science"
        desc="test"
      />
      <CardColapsable
        title="Computing Disciplines - The discipline of computer science is the body of knowledge 
        and practices used by computing professionals in their work."
        desc={descs}
      />
      <CardColapsable
        title="5 main computing disciples - The profession contains various specialties such as computer 
        science, computer engineering, software engineering, information systems, domain-specific 
        applications, and computer systems."
        desc={descs2}
      />
    </>
  )
}

export default HistoryOfCS

/*
 desc1="The discipline of computer science was born in the early 1940s with the confluence 
        of algorithm theory, mathematical logic, and the invention of the stored-program electronic 
        computer."
        desc2="the early 1960s, there was a sufficient body of knowledge to merit the first academic 
        departments and degree programs."
 */