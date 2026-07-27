import { Link } from "react-router";
import { LegalPage, H2, P, UL, LI } from "../components/LegalPage";

const EMAIL = "hello@cip.org.au";

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="The terms on which you use the CiP Network — our member portal and mobile apps."
      updated="27 July 2026"
    >
      <H2>Agreement</H2>
      <P>
        These terms are between you and <strong>Christians in Politics Australia Ltd</strong> (ABN{" "}
        <strong>93 697 747 630</strong>) — "CiP", "we", "us" — a public company limited by guarantee
        registered as a charity with the Australian Charities and Not-for-profits Commission (ACNC).
      </P>
      <P>
        By creating an account or using the CiP Network, you agree to these terms. If you do not
        agree, please do not use the network.
      </P>

      <H2>Who can join</H2>
      <P>
        The CiP Network is for people engaging with Australian political life who affirm the
        Christian faith as described at sign-up. You must be at least 16 years old. You may hold any
        party affiliation, or none.
      </P>

      <H2>Your account</H2>
      <UL>
        <LI>Provide accurate information about yourself, and keep it current.</LI>
        <LI>
          Your account is personal to you. Do not share your password or let someone else use your
          account.
        </LI>
        <LI>Tell us promptly if you believe your account has been accessed without your permission.</LI>
        <LI>You may delete your account at any time from Settings.</LI>
      </UL>

      <H2>We are non-partisan</H2>
      <P>
        CiP does not endorse any party, candidate or policy, and nothing posted on the network should
        be read as our endorsement. Members speak for themselves. Party affiliations shown on
        profiles are self-declared and are not verified by us.
      </P>
      <P>
        Do not use the network to campaign on CiP's behalf, to imply CiP support for a party or
        candidate, or to solicit political donations.
      </P>

      <H2>How we expect members to behave</H2>
      <P>
        This network exists so Christians across the political divide can talk to each other. That
        only works if members disagree well. When you post, comment or message:
      </P>
      <UL>
        <LI>Engage with arguments rather than attacking people.</LI>
        <LI>
          Do not harass, bully, threaten, defame or vilify anyone, including on the basis of race,
          religion, sex, sexuality, disability or political belief.
        </LI>
        <LI>Do not post unlawful, obscene, or deliberately misleading content.</LI>
        <LI>
          Do not share another member's personal information, or content from a private group,
          outside the network without their permission.
        </LI>
        <LI>Do not spam, advertise, or scrape or bulk-collect member data.</LI>
        <LI>Do not impersonate anyone, or misrepresent your role or affiliation.</LI>
        <LI>Do not attempt to gain access to accounts, data or systems you are not entitled to.</LI>
      </UL>

      <H2>Your content</H2>
      <P>
        You keep ownership of what you post. By posting, you give us a non-exclusive, royalty-free
        licence to host, store, reproduce and display that content for the purpose of operating the
        network. This licence ends when you delete the content or your account, except where it has
        been shared with others in a way that cannot be recalled — a sent message, for instance.
      </P>
      <P>
        You are responsible for what you post, and you confirm you have the right to post it.
      </P>

      <H2>Moderation</H2>
      <P>
        Members can report content or other members. We may remove content, or suspend or terminate
        an account, where we consider these terms have been breached — and we may do so without
        notice where the breach is serious or the risk to others is immediate.
      </P>
      <P>
        We are not obliged to monitor everything posted, and we do not endorse member content by
        allowing it to remain.
      </P>

      <H2>Events</H2>
      <P>
        Members can create and register for events. Unless an event is explicitly run by CiP, the
        organiser is responsible for it — not us. Registering through the network is not a
        commitment on our part.
      </P>

      <H2>Availability</H2>
      <P>
        We provide the network as it is. We aim to keep it running, but we do not promise it will be
        uninterrupted or error-free, and we may change, suspend or discontinue features. We will give
        members reasonable notice before any significant change.
      </P>

      <H2>Liability</H2>
      <P>
        Nothing in these terms excludes rights you have under the Australian Consumer Law that cannot
        be excluded. Subject to that, and to the extent the law allows, we are not liable for
        indirect or consequential loss, for content posted by other members, or for anything arising
        from your dealings with other members — online or in person. Where our liability cannot be
        excluded, it is limited to resupplying the service.
      </P>

      <H2>Changes to these terms</H2>
      <P>
        We may update these terms. The date at the top shows when they were last revised, and we will
        tell members through the app if a change is significant. Continuing to use the network after
        a change means you accept the updated terms.
      </P>

      <H2>Governing law</H2>
      <P>
        These terms are governed by the laws of New South Wales, Australia, and you submit to the
        courts of that state.
      </P>

      <H2>Contact</H2>
      <P>
        Questions about these terms go to{" "}
        <a href={`mailto:${EMAIL}`} className="text-copper-700 underline font-semibold">
          {EMAIL}
        </a>
        . See also our{" "}
        <Link to="/privacy" className="text-copper-700 underline font-semibold">
          privacy policy
        </Link>{" "}
        and{" "}
        <Link to="/support" className="text-copper-700 underline font-semibold">
          support page
        </Link>
        .
      </P>
    </LegalPage>
  );
}
