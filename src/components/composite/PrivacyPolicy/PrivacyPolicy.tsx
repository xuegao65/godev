import React from "react";
import styles from "./PrivacyPolicy.module.css";

interface PolicySection {
  title: string;
  content: string;
}

const PrivacyPolicy: React.FC = () => {
  const policyData: Record<string, PolicySection> = {
    collect: {
      title: "Information Collection",
      content:
        "Our platform operates on a strict data minimalism principle. We interact with blockchain data including wallet addresses, transaction records, and prediction content. All platform interactions, including AI-generated artwork and blockchain verification data, are recorded on-chain. We maintain complete transparency about our data collection while ensuring user privacy.",
    },
    doNotCollect: {
      title: "We DO NOT Collect",
      content:
        "ProphecyJimpsons is designed with privacy at its core. We explicitly avoid collecting any personal identification information, banking details, private keys, email addresses, physical addresses, or phone numbers. This commitment to privacy ensures your anonymity while using our platform.",
    },
    dataUsage: {
      title: "Data Usage",
      content:
        " Your blockchain data enables us to process predictions and generate AI artwork seamlessly. We utilize platform interaction data to verify prophecy outcomes and maintain robust security protocols. This information helps us enhance the user experience and optimize platform performance while respecting your privacy. ",
    },
    protection: {
      title: "Data Protection",
      content:
        " Security is paramount in our decentralized infrastructure. All data is stored across decentralized networks, protected by smart contract security measures and regular audits. Our system employs encrypted data transmission and automated security protocols, eliminating any central point of failure. ",
    },
    rights: {
      title: "User Rights",
      content:
        " ProphecyJimpsons empowers users with complete control over their data. You maintain the right to anonymity throughout your platform experience. You can manage your wallet connections, modify predictions, and control your NFTs at any time. The platform ensures your ability to delete or export your data whenever desired. ",
    },
    changes: {
      title: "Changes to this Policy",
      content:
        "This policy may be updated to reflect platform improvements and regulatory requirements. Any changes will take effect immediately upon posting to the platform. We encourage users to regularly review this policy to stay informed about how we protect their privacy.",
    },
    contact: {
      title: "Contact",
      content:
        "For any inquiries regarding this privacy policy, please reach out through our official social media channels or community platforms. Our team is committed to addressing your privacy concerns and maintaining transparent communication with our users.",
    },
  };

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Privacy Policy</h1>

        <p className={styles.description}>
          ProphecyJimpsons ("we," "our," or "us") respects and protects the
          privacy of our users. This Privacy Policy explains how we collect,
          use, and safeguard your information when you use our platform.
        </p>

        {Object.entries(policyData).map(([key, section]) => (
          <div key={key} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PrivacyPolicy;
