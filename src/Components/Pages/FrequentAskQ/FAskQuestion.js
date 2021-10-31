import React,{useState} from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
const FAskQuestion = () => {
    const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
    return (
        <div className='container mt-5'>
            <div className="main mb-3">
                 <h4 className="title">Frequently Asked Question</h4>
            </div>
            <p className='text-center lead'> Frequently asked questions, or FAQs as they are known, are a great way to improve your customer's experience of your website. It allows you to answer the questions that are most commonly asked surrounding your product or service </p>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Can You Arrange Customize Package Tour?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, We Can Arrange Customize Tour As Per The Client Needs. We Arrange Picnic, Educational tour, Flights tickets and Foreign Trip Also.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Do You Have Any Promotion Offer?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, We Usually Give Many Promotional Offers to Our Subscribed Clients. Get Yourself Subscribed to Get Promotional Message From Us. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Is There Any Option To Arrange Family Picnic Throgh GhuriFiri?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Yes We Arrange Private Family Picnic Also.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
    );
};

export default FAskQuestion;