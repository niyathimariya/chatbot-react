import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { generatePDF } from './PdfGenerator';

class SimpleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meetingDetails: {
        meeting_number: '',
        shg_name: '',
        meeting_date: '',
        meeting_time: '',
        meeting_location: '',
        meeting_attendees: '',
        meeting_agendas: '',
        meeting_decisions: '',
        meeting_notes: '',
        next_meeting_date: '',
        next_meeting_time: '',
        next_meeting_location: ''
      }
    };
  }

  handleUserResponse = (field, value) => {
    this.setState((prevState) => ({
      meetingDetails: {
        ...prevState.meetingDetails,
        [field]: value,
      },
    }));
  };

  handleEnd = () => {
    console.log('PdfGenerator.js is called');
    generatePDF(this.state.meetingDetails);
  };
  

    render() {
        return (
            <ChatBot
                steps={[
                    {
                        id: '1',
                        message: 'What is the meeting number?',
                        trigger: 'meeting_number',
                      },
                      {
                        id: 'meeting_number',
                        user: true,
                        trigger: '2',
                      },
                      {
                        id: '2',
                        message: 'What is the name of the SHG?',
                        trigger: 'shg_name',
                      },
                      {
                        id: 'shg_name',
                        user: true,
                        trigger: '3',
                      },
                      {
                        id: '3',
                        message: 'What is the date of the meeting?',
                        trigger: 'meeting_date',
                      },
                      {
                        id: 'meeting_date',
                        user: true,
                        trigger: '4',
                      },
                      {
                        id: '4',
                        message: 'What is the time of the meeting?',
                        trigger: 'meeting_time',
                      },
                      {
                        id: 'meeting_time',
                        user: true,
                        trigger: '5',
                      },
                      {
                        id: '5',
                        message: 'Where is the meeting taking place?',
                        trigger: 'meeting_location',
                      },
                      {
                        id: 'meeting_location',
                        user: true,
                        trigger: '6',
                      },
                      {
                        id: '6',
                        message: 'Attendees of the meeting?',
                        trigger: 'meeting_attendees',
                      },
                      {
                        id: 'meeting_attendees',
                        user: true,
                        trigger: '7',
                      },
                      {
                        id: '7',
                        message: 'Agendas of the meeting?',
                        trigger: 'meeting_agendas',
                      },
                      {
                        id: 'meeting_agendas',
                        user: true,
                        trigger: '8',
                      },
                      {
                        id: '8',
                        message: 'Decisions of the meeting?',
                        trigger: 'meeting_decisions',
                      },
                      {
                        id: 'meeting_decisions',
                        user: true,
                        trigger: '9',
                      },
                      {
                        id: '9',
                        message: 'Are there any special notes for the meeting? If yes, please provide:',
                        trigger: 'meeting_notes',
                      },
                      {
                        id: 'meeting_notes',
                        user: true,
                        trigger: '10',
                      },
                      {
                        id: '10',
                        message: 'What is the date of the next meeting?',
                        trigger: 'next_meeting_date',
                      },
                      {
                        id: 'next_meeting_date',
                        user: true,
                        trigger: '11',
                      },
                      {
                        id: '11',
                        message: 'What is the time of the next meeting?',
                        trigger: 'next_meeting_time',
                      },
                      {
                        id: 'next_meeting_time',
                        user: true,
                        trigger: '12',
                      },
                      {
                        id: '12',
                        message: 'Where is the next meeting taking place?',
                        trigger: 'next_meeting_location',
                      },
                      {
                        id: 'next_meeting_location',
                        user: true,
                        trigger: 'end',
                      },
                    //   {
                    //     id: 'review',
                    //     component: <Review />,
                    //     asMessage: true,
                    //     trigger: 'update',
                    // },
                    {
                      id: 'end',
                      message: 'Thank you for providing the meeting details! Generating PDF...',
                      end: true,
                      trigger: () => this.handleEnd(),
                    },
                  ]}
            />
        );
    }
}

export default SimpleForm;