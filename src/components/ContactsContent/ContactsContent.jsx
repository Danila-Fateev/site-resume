import styledComponents from './ContactsContent.styled';
const {
  TextAboutMe,
  TextAboutMeSpan,
  ResumeLink,
  MailLink,
  ContactsText,
  ContactsTextEmail,
} = styledComponents;

const ContactsContent = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'baseline',
      }}
    >
      <div>
        <TextAboutMe>
          I’m interested in freelance opportunities – especially ambitious or
          large projects. Here you can find my
          <TextAboutMeSpan> resume</TextAboutMeSpan>. However, if you have other
          request or question, don’t hesitate to contact me.
        </TextAboutMe>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <MailLink href="mailto:fateevdanon@gmail.com" target="_blank">
            Contact me
          </MailLink>
          <ResumeLink
            href="https://drive.google.com/file/d/1dG9F33yHD0S-Lpf0lsZLFnEqjm673DNr/view?usp=sharing"
            target="_blank"
          >
            Resume
          </ResumeLink>
        </div>
      </div>
      <div>
        <ContactsText>
          My mail: <ContactsTextEmail>danila@gmail.com</ContactsTextEmail>
          <br />
          and my social medias:
          <br />
        </ContactsText>
      </div>
    </div>
  );
};

export default ContactsContent;
