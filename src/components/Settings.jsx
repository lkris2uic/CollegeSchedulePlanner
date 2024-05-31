import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  margin: '20px 0',
  minWidth: 120,
  width: '100%',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: '20px',
}));

const Settings = () => {
  const [difficulty, setDifficulty] = useState('');
  const [credits, setCredits] = useState('');
  const [major, setMajor] = useState('');
  const [minor, setMinor] = useState('');
  const [workHours, setWorkHours] = useState('');
  const [preferredTimes, setPreferredTimes] = useState([]);
  const [notificationEmail, setNotificationEmail] = useState(false);
  const [notificationSMS, setNotificationSMS] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      difficulty,
      credits,
      major,
      minor,
      workHours,
      preferredTimes,
      notificationEmail,
      notificationSMS,
    });
  };

  return (
    <section className="settings" id="settings">
      <Container>
        <Row>
          <Col>
            <h1 className="tagline">Settings</h1>
            <p>Update your preferences for the schedule generation tool.</p>
          </Col>
        </Row>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <StyledFormControl>
                <InputLabel id="difficulty-label">Preferred Difficulty Level</InputLabel>
                <Select
                  labelId="difficulty-label"
                  id="difficulty"
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                >
                  <MenuItem value={'Easy'}>Easy</MenuItem>
                  <MenuItem value={'Moderate'}>Moderate</MenuItem>
                  <MenuItem value={'Challenging'}>Challenging</MenuItem>
                </Select>
              </StyledFormControl>
            </Col>
            <Col md={6}>
              <TextField
                fullWidth
                label="Desired Number of Credits"
                type="number"
                value={credits}
                onChange={(e) => setCredits(e.target.value)}
                sx={{ margin: '20px 0' }}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <TextField
                fullWidth
                label="Major"
                value={major}
                onChange={(e) => setMajor(e.target.value)}
                sx={{ margin: '20px 0' }}
              />
            </Col>
            <Col md={6}>
              <TextField
                fullWidth
                label="Minor"
                value={minor}
                onChange={(e) => setMinor(e.target.value)}
                sx={{ margin: '20px 0' }}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <TextField
                fullWidth
                label="Number of Job Hours per Week"
                type="number"
                value={workHours}
                onChange={(e) => setWorkHours(e.target.value)}
                sx={{ margin: '20px 0' }}
              />
            </Col>
            <Col md={6}>
              <StyledFormControl>
                <InputLabel id="preferred-times-label">Preferred Class Times</InputLabel>
                <Select
                  labelId="preferred-times-label"
                  id="preferred-times"
                  multiple
                  value={preferredTimes}
                  onChange={(e) => setPreferredTimes(e.target.value)}
                  renderValue={(selected) => selected.join(', ')}
                >
                  <MenuItem value={'Morning'}>Morning</MenuItem>
                  <MenuItem value={'Afternoon'}>Afternoon</MenuItem>
                  <MenuItem value={'Evening'}>Evening</MenuItem>
                </Select>
              </StyledFormControl>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={notificationEmail}
                    onChange={(e) => setNotificationEmail(e.target.checked)}
                    name="notificationEmail"
                    color="primary"
                  />
                }
                label="Receive notifications via Email"
              />
            </Col>
            <Col md={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={notificationSMS}
                    onChange={(e) => setNotificationSMS(e.target.checked)}
                    name="notificationSMS"
                    color="primary"
                  />
                }
                label="Receive notifications via SMS"
              />
            </Col>
          </Row>
          <StyledButton variant="contained" color="primary" type="submit">
            Save Settings
          </StyledButton>
        </Form>
      </Container>
    </section>
  );
};

export default Settings;
