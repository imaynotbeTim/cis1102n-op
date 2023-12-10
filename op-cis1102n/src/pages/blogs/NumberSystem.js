import React from 'react'
import CardColapsable from '../../components/CardColapsable'
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Typography, 

  styled,
  IconButton,
  Collapse,

} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const NumberSystem = () => {
  const descArr=[
    {
      id:1,
      text:"Positional number systems - The meaning of each digit depends on its position in the number.(Numbers are in positional 	code.)"
    },
    {
      id:2,
      text:"Non-positional number systems- Old Roman numbers (i.e. XIX equals to 19)"
    },
  ]
  const descs = descArr.map(data =>{
    return(
      <li key={data.id}>{data.text}</li>
    )
  })

  const subDescArr=[
    {
      id:1,
      text:
        {
          title:"DECIMAL to BINARY conversion:",
          li1:"Method: RDM or SDM",
          li2:"Elements of Division: Dividend, Divisor, Quotient",
        },
    },
    {
      id:2,
      text:
        {
          title:"DECIMAL to BINARY conversion:",
          li1:"Method: RDM or SDM",
          li2:"Elements of Division: Dividend, Divisor, Quotient",
        },
    },
    {
      id:3,
      text:
        {
          title:"DECIMAL to BINARY conversion:",
          li1:"Method: RDM or SDM",
          li2:"Elements of Division: Dividend, Divisor, Quotient",
        },
    },
  ]
  const descs1 = subDescArr.map(data =>{
    return(
      <>
        <div style={{display:"flexbox"}}>
            <p>{data.text.title}</p>
            <ul>
              <li>{data.text.li1}</li>
              <li>{data.text.li2}</li>
            </ul>   
        </div>
    </>
  )})
  
  const subDescArr1=[
    {
      id:1,
      text:
        {
          title:"BINARY to DECIMAL conversion:",
          li1:"Method: Number expansion into positional powers of 2 series",
        },
    },
    {
      id:2,
      text:
        {
          title:"BINARY to OCTAL conversion:",
          li1:"Method: Group / Split the given bits into 3 bits per group",
        },
    },
    {
      id:3,
      text:
        {
          title:"BINARY to HEXADECIMAL conversion:",
          li1:"Method: Group / Split the given bits into 4 bits per group",
        },
    },
  ]
  const descs2 = subDescArr1.map(data =>{
    return(
      <>
        <div style={{display:"flexbox"}}>
            <p>{data.text.title}</p>
            <ul>
              <li>{data.text.li1}</li>
            </ul>   
        </div>
    </>
  )})

  const subDescArr2=[
    {
      id:1,
      text:
        {
          title:"OCTAL to BINARY conversion:",
          li1:"Method: Represent each octal digit with 3 bits",
        },
    },
    {
      id:2,
      text:
        {
          title:"OCTAL to DECIMAL conversion:",
          li1:"Method: Number expansion into positional powers of 8 series",
        },
    },
    {
      id:3,
      text:
        {
          title:"OCTAL to HEXADECIMAL conversion:",
          li1:"2-Step Method: Convert the octal number into binary and Convert the binary number of Step 1 into hexadecimal number: (1 hex digit = 4 bits)",
        },
    },
  ]
  const descs3 = subDescArr2.map(data =>{
    return(
      <>
        <div style={{display:"flexbox"}}>
            <p>{data.text.title}</p>
            <ul>
              <li>{data.text.li1}</li>
            </ul>   
        </div>
    </>
  )})

  const subDescArr3=[
    {
      id:1,
      text:
        {
          title:"HEXADECIMAL to BINARY conversion:",
          li1:"Method: Represent each hex digit with 4 bits",
        },
    },
    {
      id:2,
      text:
        {
          title:"HEXADECIMAL to DECIMAL conversion:",
          li1:"Method: RDM or SDM",
        },
    },
    {
      id:3,
      text:
        {
          title:"HEXADECIMAL to OCTAL conversion:",
          li1:"2-Step Method: Convert the hex number into binary and Convert the binary number of Step 1 into octal number: (1 octal digit = 3 bits)",
        },
    },
  ]
  const descs4 = subDescArr3.map(data =>{
    return(
      <>
        <div style={{display:"flexbox"}}>
            <p>{data.text.title}</p>
            <ul>
              <li>{data.text.li1}</li>
            </ul>   
        </div>
    </>
  )})
  return (
    <>
    <CardColapsable
      title="Number Systems"
      description="Employed in arithmetic to represent numbers by strings of digits."
      desc={descs}
    />
    <CustomCard
      title="DECIMAL Number System"
      description="A base or radix 10 number system (0,1,2,3,4,5,6,7,8,9)"
      desc={descs1}
    />
    <CustomCard
      title="BINARY Number System"
      description="A base or radix 2 number system(0,1)"
      desc={descs2}
    />
    <CustomCard
      title="OCTAL Number System"
      description="A base or radix 8 number system (0,1,2,3,4,5,6,7)"
      desc={descs3}
    />
    <CustomCard
      title="HEXADECIMAL Number System"
      description="A base or radix 16 number system (0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F)"
      desc={descs4}
    />
    </>
  )
}
const CustomCard = (props) => {
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const [expanded, setExpanded] = React.useState(false);

const handleExpandClick = () => {
    setExpanded(!expanded);
};
  return(
    <Box
      sx={{
        p: 1,
        m: 1,
      }}
    >
      <Card sx={{
        
        borderRadius: '20px',
        textAlign: 'left', 
      }}>
        <CardContent sx={{ fontSize: 20, backgroundColor: '#d9d9d9' }}>
          <Typography variant="h6">
            {props.title}
          </Typography>
        </CardContent>
        <CardActions sx={{ backgroundColor: '#f2f2f2' }}>
          <Typography>
            {props.description}
          </Typography>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent sx={{display:"flex"}}>
            <Typography sx={{textAlign:'left'}}>
              {props.desc}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  )
}
export default NumberSystem