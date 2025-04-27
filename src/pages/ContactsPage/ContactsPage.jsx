import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";
import ContactList from "../../components/ContactList/ContactList.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import {
  selectContacts,
  selectError,
  selectLoading,
} from "../../redux/contacts/selectors.js";
import css from "./ContactsPage.module.css";

function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.formWrapper}>
      <div style={{ flex: "1" }}>
        <p className={css.sectionTitle}>Add Contact</p>
        <ContactForm />
        <p className={css.sectionTitle}>Search</p>
        <SearchBox />
      </div>

      <div style={{ flex: "2" }}>
        {isLoading && <p className={css.loadingText}>Loading...</p>}
        {error && <p className={css.loadingText}>An error occurred...</p>}
        {contacts.length > 0 && <ContactList />}
      </div>
    </div>
  );
}

export default ContactsPage;
