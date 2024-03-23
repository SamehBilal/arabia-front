<script>
import Layout from "../../layouts/front.vue";
import PageHeader from "./sections/page-header.vue";

/**
 * Shops Component
 */
export default {
    components: { Layout, PageHeader },
    data() {
        return {
            title: "Terms & Conditions",
            items: [
                {
                    text: "Homepage"
                },
                {
                    text: "Terms & Conditions",
                    active: true
                },
            ],
            desc: "",
        };
    },
};

</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" :desc="desc" />
        <p class="page-terms-welcome-to-arabia">
            Welcome To Arabia Talents! <br />
        <p class="text-p">
            <br />these Terms And Conditions Outline The Rules And Regulations For The Use Of Arabia Talents&#39;s
            Website, Located At Https://arabiatalents.com. <br />
            <br />by Accessing This Website We Assume You Accept These Terms And Conditions. Do Not Continue To Use
            Arabia
            Talents If You Do Not Agree To Take All Of The Terms And Conditions Stated On This Page. <br />
            <br />the Following Terminology Applies To These Terms And Conditions, Privacy Statement And Disclaimer
            Notice
            And All Agreements: &#34;client&#34;, &#34;you&#34; And &#34;your&#34; Refers To You, The Person Log On This
            Website And Compliant To The Company’s Terms And Conditions. &#34;the Company&#34;, &#34;ourselves&#34;,
            &#34;we&#34;, &#34;our&#34; And &#34;us&#34;, Refers To Our Company. &#34;party&#34;, &#34;parties&#34;, Or
            &#34;us&#34;, Refers To Both The Client And Ourselves. All Terms Refer To The Offer, Acceptance And
            Consideration Of Payment Necessary To Undertake The Process Of Our Assistance To The Client In The Most
            Appropriate Manner For The Express Purpose Of Meeting The Client’s Needs In Respect Of Provision Of The
            Company’s Stated Services, In Accordance With And Subject To, Prevailing Law Of Netherlands. Any Use Of The
            Above Terminology Or Other Words In The Singular, Plural, Capitalization And/or He/she Or They, Are Taken As
            Interchangeable And Therefore As Referring To Same. <br />
        </p>

        <br />cookies<br />
        <p class="text-p">
            <br />we Employ The Use Of Cookies. By Accessing Arabia Talents, You Agreed To Use Cookies
            In Agreement With The Arabia Talents&#39;s Privacy Policy. <br />
            <br />most Interactive Websites Use Cookies To Let Us Retrieve The User’s Details For Each Visit. Cookies
            Are
            Used By Our Website To Enable The Functionality Of Certain Areas To Make It Easier For People Visiting Our
            Website. Some Of Our Affiliate/advertising Partners May Also Use Cookies. <br />
        </p>
        <br />license<br />
        <p class="text-p">
            <br />unless Otherwise Stated, Arabia Talents And/or Its Licensors Own The Intellectual
            Property Rights For All Material On Arabia Talents. All Intellectual Property Rights Are Reserved. You May
            Access This From Arabia Talents For Your Own Personal Use Subjected To Restrictions Set In These Terms And
            Conditions. <br />
            <br />you Must Not: <br />
            <br />republish Material From Arabia Talents <br />sell, Rent Or Sub-license Material From Arabia Talents
            <br />reproduce, Duplicate Or Copy Material From Arabia Talents <br />redistribute Content From Arabia
            Talents
            <br />this Agreement Shall Begin On The Date Hereof. Our Terms And Conditions Were Created With The Help Of
            The Free Terms And Conditions Generator. <br />
            <br />parts Of This Website Offer An Opportunity For Users To Post And Exchange Opinions And Information In
            Certain Areas Of The Website. Arabia Talents Does Not Filter, Edit, Publish Or Review Comments Prior To
            Their
            Presence On The Website. Comments Do Not Reflect The Views And Opinions Of Arabia Talents,its Agents And/or
            Affiliates. Comments Reflect The Views And Opinions Of The Person Who Post Their Views And Opinions. To The
            Extent Permitted By Applicable Laws, Arabia Talents Shall Not Be Liable For The Comments Or For Any
            Liability,
            Damages Or Expenses Caused And/or Suffered As A Result Of Any Use Of And/or Posting Of And/or Appearance Of
            The Comments On This Website. <br />
            <br />arabia Talents Reserves The Right To Monitor All Comments And To Remove Any Comments Which Can Be
            Considered Inappropriate, Offensive Or Causes Breach Of These Terms And Conditions. <br />
            <br />you Warrant And Represent That: <br />
            <br />you Are Entitled To Post The Comments On Our Website And Have All Necessary Licenses And Consents To
            Do
            So; <br />the Comments Do Not Invade Any Intellectual Property Right, Including Without Limitation
            Copyright,
            Patent Or Trademark Of Any Third Party; <br />the Comments Do Not Contain Any Defamatory, Libelous,
            Offensive,
            Indecent Or Otherwise Unlawful Material Which Is An Invasion Of Privacy <br />the Comments Will Not Be Used
            To
            Solicit Or Promote Business Or Custom Or Present Commercial Activities Or Unlawful Activity. <br /><br />you
            Hereby Grant Arabia Talents A Non-exclusive License To Use, Reproduce, Edit And Authorize Others To Use,
            Reproduce And Edit Any Of Your Comments In Any And All Forms, Formats Or Media. <br />
        </p>
        <br />hyperlinking To Our Content<br />
        <p class="text-p">
            <br />the Following Organizations May Link To Our Website Without Prior
            Written Approval: <br />
            <br />government Agencies; <br />search Engines; <br />news Organizations; <br />online Directory
            Distributors
            May Link To Our Website In The Same Manner As They Hyperlink To The Websites Of Other Listed Businesses; And
            <br />system Wide Accredited Businesses Except Soliciting Non-profit Organizations, Charity Shopping Malls,
            And Charity Fundraising Groups Which May Not Hyperlink To Our Web Site. <br /><br />these Organizations May
            Link To Our Home Page, To Publications Or To Other Website Information So Long As The Link: (a) Is Not In
            Any
            Way Deceptive; (b) Does Not Falsely Imply Sponsorship, Endorsement Or Approval Of The Linking Party And Its
            Products And/or Services; And (c) Fits Within The Context Of The Linking Party’s Site. <br />
            <br />we May Consider And Approve Other Link Requests From The Following Types Of Organizations: <br />
            <br />commonly-known Consumer And/or Business Information Sources; <br />dot.com Community Sites;
            <br />associations Or Other Groups Representing Charities; <br />online Directory Distributors;
            <br />internet
            Portals; <br />accounting, Law And Consulting Firms; And <br />educational Institutions And Trade
            Associations. <br /><br />we Will Approve Link Requests From These Organizations If We Decide That: (a) The
            Link Would Not Make Us Look Unfavorably To Ourselves Or To Our Accredited Businesses; (b) The Organization
            Does Not Have Any Negative Records With Us; (c) The Benefit To Us From The Visibility Of The Hyperlink
            Compensates The Absence Of Arabia Talents; And (d) The Link Is In The Context Of General Resource
            Information.
            <br />
            <br />these Organizations May Link To Our Home Page So Long As The Link: (a) Is Not In Any Way Deceptive;
            (b)
            Does Not Falsely Imply Sponsorship, Endorsement Or Approval Of The Linking Party And Its Products Or
            Services;
            And (c) Fits Within The Context Of The Linking Party’s Site. <br />
            <br />if You Are One Of The Organizations Listed In Paragraph 2 Above And Are Interested In Linking To Our
            Website, You Must Inform Us By Sending An E-mail To Arabia Talents. Please Include Your Name, Your
            Organization Name, Contact Information As Well As The Url Of Your Site, A List Of Any Urls From Which You
            Intend To Link To Our Website, And A List Of The Urls On Our Site To Which You Would Like To Link. Wait 2-3
            Weeks For A Response. <br />
            <br />approved Organizations May Hyperlink To Our Website As Follows: <br />
            <br />by Use Of Our Corporate Name; Or <br />by Use Of The Uniform Resource Locator Being Linked To; Or
            <br />by Use Of Any Other Description Of Our Website Being Linked To That Makes Sense Within The Context And
            Format Of Content On The Linking Party’s Site. <br />no Use Of Arabia Talents&#39;s Logo Or Other Artwork
            Will
            Be Allowed For Linking Absent A Trademark License Agreement. <br />
        </p>
        <br />iframes<br />
        <p class="text-p">
            <br />without Prior Approval And Written Permission, You May Not Create Frames Around Our
            Webpages That Alter In Any Way The Visual Presentation Or Appearance Of Our Website. <br />
        </p>
        <br />content Liability<br />
        <p class="text-p">
            <br />we Shall Not Be Hold Responsible For Any Content That Appears On Your Website. You Agree To Protect
            And
            Defend Us Against All Claims That Is Rising On Your Website. No Link(s) Should Appear On Any Website That
            May
            Be Interpreted As Libelous, Obscene Or Criminal, Or Which Infringes, Otherwise Violates, Or Advocates The
            Infringement Or Other Violation Of, Any Third Party Rights. <br />
        </p>
        <br />your Privacy <br />
        <p class="text-p">
            please Read Privacy Policy <br />
        </p>
        <br />reservation Of Rights<br />
        <p class="text-p">
            <br />we Reserve The Right To Request That You Remove All Links Or Any
            Particular Link To Our Website. You Approve To Immediately Remove All Links To Our Website Upon Request. We
            Also Reserve The Right To Amen These Terms And Conditions And It’s Linking Policy At Any Time. By
            Continuously
            Linking To Our Website, You Agree To Be Bound To And Follow These Linking Terms And Conditions. <br />
            <br />
        </p>
        removal Of Links From Our Website<br />
        <p class="text-p">
            <br />if You Find Any Link On Our Website That Is Offensive For Any Reason, You Are Free To Contact And
            Inform
            Us Any Moment. We Will Consider Requests To Remove Links But We Are Not Obligated To Or So Or To Respond To
            You Directly. <br />
            <br />we Do Not Ensure That The Information On This Website Is Correct, We Do Not Warrant Its Completeness
            Or
            Accuracy; Nor Do We Promise To Ensure That The Website Remains Available Or That The Material On The Website
            Is Kept Up To Date. <br />
        </p>
        <br />disclaimer<br />
        <p class="text-p">
            <br />to The Maximum Extent Permitted By Applicable Law, We Exclude All Representations, Warranties And
            Conditions Relating To Our Website And The Use Of This Website. Nothing In This Disclaimer Will: <br />
            <br />limit Or Exclude Our Or Your Liability For Death Or Personal Injury; <br />limit Or Exclude Our Or
            Your
            Liability For Fraud Or Fraudulent Misrepresentation; <br />limit Any Of Our Or Your Liabilities In Any Way
            That Is Not Permitted Under Applicable Law; Or <br />exclude Any Of Our Or Your Liabilities That May Not Be
            Excluded Under Applicable Law. <br /><br />the Limitations And Prohibitions Of Liability Set In This Section
            And Elsewhere In This Disclaimer: (a) Are Subject To The Preceding Paragraph; And (b) Govern All Liabilities
            Arising Under The Disclaimer, Including Liabilities Arising In Contract, In Tort And For Breach Of Statutory
            Duty. <br />
            <br />as Long As The Website And The Information And Services On The Website Are Provided Free Of Charge, We
            Will Not Be Liable For Any Loss Or Damage Of Any Nature.
        </p>
        </p>
    </Layout>
</template>