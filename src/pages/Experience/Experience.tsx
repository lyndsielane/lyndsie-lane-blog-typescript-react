import { ExperienceItem } from "../../components";
import "./Experience.scss";

function Experience() {
  return (
    <div className="Experience">
      <ExperienceItem
        companyName="PatientNow"
        title="Web Developer"
        description="Corresponded with customers, account managers, and upper management to build and maintain 400+ websites and content to customers' satisfaction.
        Address work progress to customers and account managers on projects progress across our 400+ customer website base.
        Managed 25% of new creative calls to determine needs and desires for new website builds and create new, responsive sites quickly and efficiently within the given time frame.
        Correspond with a team of six developers to assist each other and work together to problem solve and brainstorm for optimal performance.
        Programmed sites via 10% Wordpress and 90% Wordpress Engine to get to and work on customer sites.
        Analyzed issues with plugins, websites, forms, etc and find quick resolutions to prevent the customers site from going down."
        fromDate="Jan 2022"
        toDate="Oct 2022"
      />
      <hr />
      <ExperienceItem
        companyName="Kemira"
        title="Customer Service Team Lead"
        description="Coached Coagulants Customer Service Team servicing US and Canada, totaling six members.
        Spearheaded complaints and issues with orders while quickly finding a solution agreeable to customers and the company.
        Trained four new team members and assisted with their daily work questions and issues as they transitioned.
        Improved 25% of the processes and managed multiple projects for implementations.
        Facilitated relations across segments and departments and worked closely with product line management.
        Counseled 100% of customers on resolutions to ensure their satisfaction was met.
        Published reports to higher management and sales team to assist in tracking metrics and closing deals.
        "
        fromDate="Sep 2010"
        toDate="Jun 2021"
      />
      <hr />
    </div>
  );
}

export default Experience;
