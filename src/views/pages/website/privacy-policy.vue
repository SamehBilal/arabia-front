<script>
import Layout from "../../layouts/front.vue";
import PageHeader from "../../pages/website/page-header.vue";

/**
 * Shops Component
 */
export default {
    components: { Layout, PageHeader },
    data() {
        return {
            title: "Privacy Policy",
            items: [
                {
                    text: "Homepage"
                },
                {
                    text: "Privacy Policy",
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
        <div class="page-privacy-overlap">
          <img class="page-privacy-vector" src="https://c.animaapp.com/63I3wLeD/img/vector-3.png" />
          <div class="page-privacy-group">
            <div class="page-privacy-privacy-policy-for-wrapper">
              <p class="page-privacy-privacy-policy-for">
                Privacy Policy For Arabia Talents<br />
                <br />at Arabia Talents, Accessible From Http://arabiatalents.com/, One Of Our Main Priorities Is The
                Privacy Of Our Visitors. This Privacy Policy Document Contains Types Of Information That Is Collected
                And Recorded By Arabia Talents And How We Use It. <br />
                <br />if You Have Additional Questions Or Require More Information About Our Privacy Policy, Do Not
                Hesitate To Contact Us. <br />
                <br />this Privacy Policy Applies Only To Our Online Activities And Is Valid For Visitors To Our Website
                With Regards To The Information That They Shared And/or Collect In Arabia Talents. This Policy Is Not
                Applicable To Any Information Collected Offline Or Via Channels Other Than This Website<br />
                <br />consent<br /><br />by Using Our Website, You Hereby Consent To Our Privacy Policy And Agree To Its
                Terms. <br />
                <br />information We Collect<br /><br />the Personal Information That You Are Asked To Provide, And The
                Reasons Why You Are Asked To Provide It, Will Be Made Clear To You At The Point We Ask You To Provide
                Your Personal Information. <br />
                <br />if You Contact Us Directly, We May Receive Additional Information About You Such As Your Name,
                Email Address, Phone Number, The Contents Of The Message And/or Attachments You May Send Us, And Any
                Other Information You May Choose To Provide. <br />
                <br />when You Register For An Account, We May Ask For Your Contact Information, Including Items Such As
                Name, Company Name, Address, Email Address, And Telephone Number. <br />&nbsp;&nbsp;<br />how We Use
                Your Information<br /><br />we Use The Information We Collect In Various Ways, Including
                To:&nbsp;&nbsp;<br />
                <br />provide, Operate, And Maintain Our Website <br />improve, Personalize, And Expand Our Website
                <br />understand And Analyze How You Use Our Website <br />develop New Products, Services, Features, And
                Functionality <br />communicate With You, Either Directly Or Through One Of Our Partners, Including For
                Customer Service, To Provide You With Updates And Other Information Relating To The Website, And For
                Marketing And Promotional Purposes <br />send You Emails <br />find And Prevent Fraud <br /><br />
                <br />log Files<br /><br />arabia Talents Follows A Standard Procedure Of Using Log Files. These Files
                Log Visitors When They Visit Websites. All Hosting Companies Do This And A Part Of Hosting Services&#39;
                Analytics. The Information Collected By Log Files Include Internet Protocol (ip) Addresses, Browser
                Type, Internet Service Provider (isp), Date And Time Stamp, Referring/exit Pages, And Possibly The
                Number Of Clicks. These Are Not Linked To Any Information That Is Personally Identifiable. The Purpose
                Of The Information Is For Analyzing Trends, Administering The Site, Tracking Users&#39; Movement On The
                Website, And Gathering Demographic Information. <br />
                <br />cookies And Web Beacons<br />
                <br />like Any Other Website, Arabia Talents Uses &#39;cookies&#39;. These Cookies Are Used To Store
                Information Including Visitors&#39; Preferences, And The Pages On The Website That The Visitor Accessed
                Or Visited. The Information Is Used To Optimize The Users&#39; Experience By Customizing Our Web Page
                Content Based On Visitors&#39; Browser Type And/or Other Information.<br />
                <br />advertising Partners Privacy Policies<br />you May Consult This List To Find The Privacy Policy
                For Each Of The Advertising Partners Of Arabia Talents. <br />
                <br />third-party Ad Servers Or Ad Networks Uses Technologies Like Cookies, Javascript, Or Web Beacons
                That Are Used In Their Respective Advertisements And Links That Appear On Arabia Talents, Which Are Sent
                Directly To Users&#39; Browser. They Automatically Receive Your Ip Address When This Occurs. These
                Technologies Are Used To Measure The Effectiveness Of Their Advertising Campaigns And/or To Personalize
                The Advertising Content That You See On Websites That You Visit. <br />
                <br />note That Arabia Talents Has No Access To Or Control Over These Cookies That Are Used By
                Third-party Advertisers. <br />
                <br />third Party Privacy Policies<br />arabia Talents&#39;s Privacy Policy Does Not Apply To Other
                Advertisers Or Websites. Thus, We Are Advising You To Consult The Respective Privacy Policies Of These
                Third-party Ad Servers For More Detailed Information. It May Include Their Practices And Instructions
                About How To Opt-out Of Certain Options. <br />
                <br />you Can Choose To Disable Cookies Through Your Individual Browser Options. To Know More Detailed
                Information About Cookie Management With Specific Web Browsers, It Can Be Found At The Browsers&#39;
                Respective Websites. <br />
                <br />ccpa Privacy Rights (do Not Sell My Personal Information)<br />
                <br />under The Ccpa, Among Other Rights, California Consumers Have The Right To: <br />
                <br />request That A Business That Collects A Consumer&#39;s Personal Data Disclose The Categories And
                Specific Pieces Of Personal Data That A Business Has Collected About Consumers. <br />
                <br />request That A Business Delete Any Personal Data About The Consumer That A Business Has Collected.
                <br />
                <br />request That A Business That Sells A Consumer&#39;s Personal Data, Not Sell The Consumer&#39;s
                Personal Data. <br />
                <br />if You Make A Request, We Have One Month To Respond To You. If You Would Like To Exercise Any Of
                These Rights, Please Contact Us. <br />
                <br />
                <br />gdpr Data Protection Rights<br />
                <br />we Would Like To Make Sure You Are Fully Aware Of All Of Your Data Protection Rights. Every User
                Is Entitled To The Following: <br />
                <br />the Right To Access – You Have The Right To Request Copies Of Your Personal Data. We May Charge
                You A Small Fee For This Service. <br />
                <br />the Right To Rectification – You Have The Right To Request That We Correct Any Information You
                Believe Is Inaccurate. You Also Have The Right To Request That We Complete The Information You Believe
                Is Incomplete. <br />
                <br />the Right To Erasure – You Have The Right To Request That We Erase Your Personal Data, Under
                Certain Conditions. <br />
                <br />the Right To Restrict Processing – You Have The Right To Request That We Restrict The Processing
                Of Your Personal Data, Under Certain Conditions. <br />
                <br />the Right To Object To Processing – You Have The Right To Object To Our Processing Of Your
                Personal Data, Under Certain Conditions. <br />
                <br />the Right To Data Portability – You Have The Right To Request That We Transfer The Data That We
                Have Collected To Another Organization, Or Directly To You, Under Certain Conditions. <br />
                <br />if You Make A Request, We Have One Month To Respond To You. If You Would Like To Exercise Any Of
                These Rights, Please Contact Us. <br />
                <br /><br />gdpr Data Protection Rights<br />
                <br />another Part Of Our Priority Is Adding Protection For Children While Using The Internet. We
                Encourage Parents And Guardians To Observe, Participate In, And/or Monitor And Guide Their Online
                Activity. <br />
                <br />arabia Talents Does Not Knowingly Collect Any Personal Identifiable Information From Children
                Under The Age Of 13. If You Think That Your Child Provided This Kind Of Information On Our Website, We
                Strongly Encourage You To Contact Us Immediately And We Will Do Our Best Efforts To Promptly Remove Such
                Information From Our Records.
              </p>
            </div>
          </div>
        </div>
    </Layout>
</template>