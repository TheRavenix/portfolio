import styles from "./page.module.css";

import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

export default function Contact() {
  return (
    <main>
      <Container>
        <Header title="Contact" />
        <form className={styles.content}>
          <Input label="Name (Optional)" id="name" placeholder="Someone" />
          <Input
            label="Email address"
            id="email"
            placeholder="someone@mail.com"
          />
          <Textarea label="Message" id="message" placeholder="Hello Aissa!" />
          <Button type="submit">Send Message</Button>
        </form>
      </Container>
    </main>
  );
}
