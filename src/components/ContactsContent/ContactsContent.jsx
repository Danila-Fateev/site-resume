import styledComponents from './ContactsContent.styled';
const {
  TextAboutMe,
  TextAboutMeLink,
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
          <TextAboutMeLink
            href="https://drive.google.com/file/d/1dG9F33yHD0S-Lpf0lsZLFnEqjm673DNr/view?usp=sharing"
            target="_blank"
          >
            {' '}
            resume
          </TextAboutMeLink>
          . However, if you have other request or question, don’t hesitate to
          contact me.
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
          My mail:{' '}
          <ContactsTextEmail href="mailto:fateevdanon@gmail.com">
            fateevdanon@gmail.com
          </ContactsTextEmail>
          <br />
          and my social medias:
          <br />
          <ul>
            <li>
              <a
                href="https://github.com/Danila-Fateev"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.3056 0.388885C9.08674 0.388885 0 9.47562 0 20.6944C0 29.6796 5.81247 37.2689 13.8839 39.9593C14.8992 40.137 15.2799 39.5278 15.2799 38.9948C15.2799 38.5126 15.2545 36.9135 15.2545 35.2129C10.1528 36.152 8.83292 33.9692 8.42681 32.827C8.19837 32.2432 7.20847 30.4411 6.34549 29.9589C5.63479 29.5781 4.61951 28.639 6.3201 28.6136C7.91917 28.5882 9.06135 30.0858 9.44208 30.6949C11.2696 33.7661 14.1885 32.9032 15.3561 32.3701C15.5337 31.0503 16.0668 30.1619 16.6506 29.6543C12.1326 29.1466 7.41153 27.3953 7.41153 19.6284C7.41153 17.4202 8.19837 15.5927 9.49285 14.1713C9.28979 13.6636 8.5791 11.5823 9.6959 8.79031C9.6959 8.79031 11.3965 8.25729 15.2799 10.8716C16.9044 10.4148 18.6303 10.1863 20.3563 10.1863C22.0823 10.1863 23.8083 10.4148 25.4327 10.8716C29.3161 8.23191 31.0167 8.79031 31.0167 8.79031C32.1335 11.5823 31.4228 13.6636 31.2198 14.1713C32.5143 15.5927 33.3011 17.3948 33.3011 19.6284C33.3011 27.4207 28.5547 29.1466 24.0367 29.6543C24.7728 30.2888 25.4073 31.5071 25.4073 33.4108C25.4073 36.1267 25.3819 38.3095 25.3819 38.9948C25.3819 39.5278 25.7627 40.1624 26.778 39.9593C30.8089 38.5984 34.3116 36.0077 36.7931 32.5518C39.2746 29.0959 40.6099 24.9489 40.6111 20.6944C40.6111 9.47562 31.5244 0.388885 20.3056 0.388885Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/danila-fatyeyev-a853a5249/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="37"
                  height="38"
                  viewBox="0 0 37 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.22176 0.34259C3.25418 0.34259 0.00695801 3.58974 0.00695801 7.55739V29.9462C0.00695801 33.9138 3.25411 37.1598 7.22176 37.1598H29.6106C33.5782 37.1598 36.8242 33.9138 36.8242 29.9462V7.55739C36.8242 3.58982 33.5782 0.34259 29.6106 0.34259H7.22176ZM9.03639 6.41817C10.9388 6.41817 12.1105 7.66705 12.1467 9.30867C12.1467 10.9141 10.9387 12.198 8.99959 12.198H8.9639C7.09774 12.198 5.89156 10.9141 5.89156 9.30867C5.89156 7.66708 7.13424 6.41817 9.03635 6.41817H9.03639ZM25.4302 14.0909C29.0888 14.0909 31.8314 16.4822 31.8314 21.621V31.2142H26.2713V22.2642C26.2713 20.0151 25.4666 18.4807 23.4545 18.4807C21.9184 18.4807 21.0028 19.5149 20.6008 20.514C20.4539 20.8714 20.4178 21.3706 20.4178 21.8706V31.2142H14.8577C14.8577 31.2142 14.9307 16.0531 14.8577 14.4833H20.419V16.8525C21.1578 15.7126 22.4795 14.0909 25.4302 14.0909V14.0909ZM6.21953 14.4845H11.7796V31.2143H6.21953V14.4845Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://t.me/DanilaFatyeyev"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.9999 0.164062C9.52727 0.164062 0.226929 9.38067 0.226929 20.75C0.226929 32.1193 9.52727 41.3359 20.9999 41.3359C32.4725 41.3359 41.7729 32.1193 41.7729 20.75C41.7729 9.38067 32.4725 0.164062 20.9999 0.164062ZM30.6285 14.1642C30.3159 17.4193 28.9632 25.3186 28.2748 28.9645C27.9836 30.5071 27.4102 31.0244 26.8552 31.0749C25.649 31.185 24.7328 30.2849 23.5644 29.5259C21.7362 28.3382 20.7033 27.5989 18.9285 26.4399C16.8776 25.1006 18.2072 24.3647 19.376 23.1611C19.6819 22.8463 24.997 18.0553 25.0999 17.6207C25.1127 17.5663 25.125 17.3634 25.0032 17.2568C24.8814 17.1502 24.7025 17.1863 24.5731 17.2153C24.3898 17.2566 21.469 19.1697 15.8109 22.9546C14.982 23.5187 14.2311 23.7936 13.5582 23.7792C12.8165 23.7634 11.3898 23.3637 10.3291 23.0219C9.02822 22.6029 7.99426 22.3814 8.0843 21.6696C8.13121 21.2989 8.64635 20.9198 9.62971 20.5324C15.6855 17.9178 19.7236 16.194 21.744 15.361C27.5129 12.9831 28.7116 12.5701 29.4929 12.5563C29.6648 12.5535 30.049 12.5956 30.2979 12.7958C30.4634 12.9383 30.569 13.1373 30.5936 13.3533C30.6357 13.6214 30.6475 13.8934 30.6285 14.1642Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </ContactsText>
      </div>
    </div>
  );
};

export default ContactsContent;
