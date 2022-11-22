import Section from 'components/Section';
import ContactsContent from 'components/ContactsContent';
import styledComponents from '../../commonStyles/CommonStyles';

const { SectionTitleStyled } = styledComponents;

const Contacts = () => {
  return (
    <Section>
      <SectionTitleStyled id="contacts">Contacts</SectionTitleStyled>
      <ContactsContent />
    </Section>
  );
};

export default Contacts;
