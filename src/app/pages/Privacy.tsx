import { Link } from "react-router";
import { LegalPage, H2, P, UL, LI } from "../components/LegalPage";

const EMAIL = "hello@cip.org.au";

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="How Christians in Politics Australia collects, uses and protects your personal information."
      updated="27 July 2026"
    >
      <H2>Who we are</H2>
      <P>
        This policy is issued by <strong>Christians in Politics Australia Ltd</strong> (ABN{" "}
        <strong>93 697 747 630</strong>), a public company limited by guarantee, registered as a
        charity with the Australian Charities and Not-for-profits Commission (ACNC) and based in New
        South Wales.
      </P>
      <P>
        It applies to the CiP Network — our member web portal at network.christiansinpolitics.com and
        the CiP Network mobile apps for iOS and Android — and to this website.
      </P>
      <P>
        We handle personal information in accordance with the <em>Privacy Act 1988</em> (Cth) and the
        Australian Privacy Principles.
      </P>

      <H2>Sensitive information</H2>
      <P>
        Two things you can record on your profile are treated as <strong>sensitive information</strong>{" "}
        under Australian privacy law: your <strong>political party affiliation</strong> and your{" "}
        <strong>church tradition or denomination</strong>.
      </P>
      <P>
        Both are entirely optional. We collect them only with your consent, which you give by
        choosing to enter them, and you can remove them at any time. We store them separately from
        the rest of your profile, with stricter access rules, and you control whether other members
        can see your party affiliation.
      </P>

      <H2>What we collect</H2>
      <P>When you create an account and use the network, we collect:</P>
      <UL>
        <LI>
          <strong>Account details</strong> — your email address and password. Passwords are hashed by
          our authentication provider; we never see them.
        </LI>
        <LI>
          <strong>Profile</strong> — first and last name, profile photo, job title, biography, state,
          and federal and state electorate.
        </LI>
        <LI>
          <strong>Sensitive information (optional)</strong> — political party and church tradition,
          as described above.
        </LI>
        <LI>
          <strong>Content you create</strong> — posts, comments, reactions, poll votes, events you
          create or register for, groups you create or join, and images you upload.
        </LI>
        <LI>
          <strong>Messages</strong> — direct messages between you and members you are connected to.
        </LI>
        <LI>
          <strong>Connections</strong> — connection requests you send and receive, and your group
          memberships.
        </LI>
        <LI>
          <strong>Preferences</strong> — your notification and privacy settings.
        </LI>
        <LI>
          <strong>Support and reports</strong> — support requests you raise, and reports you make
          about content or members.
        </LI>
      </UL>
      <P>
        We do <strong>not</strong> collect payment details through the app. We do not sell personal
        information, and we do not use it for advertising.
      </P>

      <H2>How we use it</H2>
      <UL>
        <LI>To operate your account and show your profile to other members as your settings allow.</LI>
        <LI>To deliver the feed, groups, events, messages and connections.</LI>
        <LI>
          To send transactional email — confirming your address, resetting your password, event
          reminders and notifications you have opted into.
        </LI>
        <LI>To respond to your support requests.</LI>
        <LI>To moderate content that is reported, and to keep the network safe.</LI>
      </UL>

      <H2>Who can see your information</H2>
      <P>
        The CiP Network is a members-only network — it is not public, and it is not indexed by search
        engines. Within it:
      </P>
      <UL>
        <LI>Your name, photo, job title, biography, state and electorate are visible to other members.</LI>
        <LI>
          Your party affiliation is visible only if you choose to show it. Your church tradition is
          used to determine eligibility for tradition-restricted groups.
        </LI>
        <LI>Direct messages are visible only to you and the member you are messaging.</LI>
        <LI>
          Posts in a group are visible to that group's members; posts in the main feed are visible to
          all members.
        </LI>
        <LI>
          Administrators can access member records where necessary to run the network, investigate
          reports, or meet a legal obligation.
        </LI>
      </UL>
      <P>
        You can review and change what you share at any time under <strong>Privacy settings</strong>.
      </P>

      <H2>Where your information is stored</H2>
      <P>
        Member data is stored in <strong>Sydney, Australia</strong> (our database provider's
        ap-southeast-2 region). We use a small number of service providers to run the network, and
        they may process data outside Australia:
      </P>
      <UL>
        <LI>
          <strong>Supabase</strong> — database, authentication and file storage (data hosted in
          Australia).
        </LI>
        <LI>
          <strong>Vercel</strong> — hosting and content delivery for the web portal and this website.
        </LI>
        <LI>
          <strong>Resend</strong> — delivery of transactional email.
        </LI>
        <LI>
          <strong>Apple and Google</strong> — distribution of the mobile apps through their app
          stores.
        </LI>
      </UL>
      <P>
        These providers act on our instructions. We do not authorise them to use your information for
        their own purposes.
      </P>

      <H2>Accessing, correcting and deleting your information</H2>
      <P>
        You can edit your profile and preferences yourself at any time. You can also{" "}
        <strong>delete your account</strong> from Settings in the app or web portal.
      </P>
      <P>
        Deleting your account permanently removes your profile, posts, comments, reactions, messages,
        connections, group memberships, event registrations and notifications. It cannot be undone.
        Copies may persist briefly in encrypted backups before those expire.
      </P>
      <P>
        Content that is inherently shared — for example a message you sent, as it appears in the
        other person's conversation — may remain visible to that person. Where you have created
        something others rely on, such as a group or an event, we may need to transfer or archive it
        rather than delete it outright.
      </P>
      <P>
        To request a copy of your information, ask us to correct it, or have us delete your account
        on your behalf, email{" "}
        <a href={`mailto:${EMAIL}`} className="text-copper-700 underline font-semibold">
          {EMAIL}
        </a>{" "}
        from the address on your account.
      </P>

      <H2>Security</H2>
      <P>
        Access to member data is restricted at the database level, so members can only reach records
        they are entitled to see. Traffic is encrypted in transit. No system is perfectly secure, but
        if a data breach occurs that is likely to cause serious harm, we will notify affected members
        and the Office of the Australian Information Commissioner as required under the Notifiable
        Data Breaches scheme.
      </P>

      <H2>Children</H2>
      <P>
        The CiP Network is intended for adults engaging in Australian political life. It is not
        directed at children, and we do not knowingly collect information from anyone under 16. If
        you believe a child has created an account, please tell us and we will remove it.
      </P>

      <H2>Complaints</H2>
      <P>
        If you are concerned about how we have handled your personal information, email{" "}
        <a href={`mailto:${EMAIL}`} className="text-copper-700 underline font-semibold">
          {EMAIL}
        </a>{" "}
        and we will respond. If you are not satisfied with our response, you can complain to the
        Office of the Australian Information Commissioner at{" "}
        <a
          href="https://www.oaic.gov.au"
          className="text-copper-700 underline font-semibold"
          rel="noopener noreferrer"
        >
          oaic.gov.au
        </a>
        .
      </P>

      <H2>Changes to this policy</H2>
      <P>
        We may update this policy as the network changes. The date at the top shows when it was last
        revised. If we make a significant change, we will tell members through the app.
      </P>

      <H2>Contact</H2>
      <P>
        Questions about this policy, or about your information, go to{" "}
        <a href={`mailto:${EMAIL}`} className="text-copper-700 underline font-semibold">
          {EMAIL}
        </a>
        . For help using the network, see our{" "}
        <Link to="/support" className="text-copper-700 underline font-semibold">
          support page
        </Link>
        .
      </P>
    </LegalPage>
  );
}
