import styles from "./SubmittedSection.module.scss";

function SubmittedSection() {
  return (
    <div className={styles.submitted}>
      <img className={styles.submitted__icon} src="assets/images/icon-thank-you.svg" alt="" />
      <h1 className={styles.submitted__heading}>Thank you!</h1>
      <p className={styles.submitted__paragraph}>
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
        please feel free to email us at support@loremgaming.com
      </p>
    </div>
  );
}

export default SubmittedSection;
