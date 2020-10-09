class Email {
  constructor(subject, body) {
    this.subject = subject;
    this.body = body;
  }
}

class SpamDetector {
  isSpam(email) {
    if (email.subject.includes('Hello')) console.log('Is this email a SPAM: TRUE');
    else if()
    {

    }
    else {
      let newemailbody = email.body.split(' ');
      let spamwords = ['Viagra', 'Offer', 'Free', 'Business Proposal'];
      spamwords.forEach((element) => {
        newemailbody.forEach((inelement) => {
          if (element.indexOf(inelement) != -1)
            console.log('Is this email a SPAM: TRUE');
        });
      });
    }
  }
}

let myEmail = new Email('Hello', 'sdcs sdjkcnskd');
let mySpamDetector = new SpamDetector();
mySpamDetector.isSpam(myEmail);
