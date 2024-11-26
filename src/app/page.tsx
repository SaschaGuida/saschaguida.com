import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/logo.webp"
          alt="saschaguida logo"
          width={180}
          height={38}
          priority
        />
        <div className="cta-container">
          <h2 className="font">Specialized in building modern web applications with intuitive designs and scalable backends. Passionate about coding and delivering tailored solutions for every project.</h2>
        </div>


        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/contact.svg"
              alt="contactme"
              width={20}
              height={20}
            />
            CONTACT ME
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            MY PORTFOLIO
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/sascha-guida-dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={styles.logo}
            aria-hidden
            src="/linkedin.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          LINKEDIN
        </a>
        <a
          href="https://github.com/SaschaGuida"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={styles.logo}
            aria-hidden
            src="/github.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          GITHUB
        </a>
        <a
          href="https://www.instagram.com/saschaguida/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={styles.logo}
            aria-hidden
            src="/instagram.svg"
            alt="Instagram icon"
            width={16}
            height={16}
          />
          INSTAGRAM
        </a>
        <a
          href="https://www.instagram.com/3dprint__it/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={styles.logo}
            aria-hidden
            src="/print.svg"
            alt="Print icon"
            width={16}
            height={16}
          />
          3D PRINT IT
        </a>
      </footer>
    </div>
  );
}
