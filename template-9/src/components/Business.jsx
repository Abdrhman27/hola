import { features } from "../constants";
import styles, {layout} from "../styles";  
import Button from "./Button";

const FeatureCard = ({icon, title, content, id}) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${id != features.length - 1 && "mb- 6"} feature-card`}>
        <div className={`w-[64px] h-[64px] ${styles.flexCenter} rounded-full bg-dimBlue`}>
            <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain"/>
        </div>
        <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px]">
                {title}
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24x]">{content}</p>
        </div>
    </div>
);

export const Business = () => (
    <section id="featuers" className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>You do the business,<br className="sm:block hidden"/> 
            we w'll handle the money.</h2>
            <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
            With the right credit card, you can improve your financial life by building credit, 
            earning rewards and saving money. But with hundreds of credit cards on the market.
            </p>
            <Button styles="mt-10"/>
        </div>
        <div className={`${layout.sectionImg} flex-col`}>
            {features.map((feat) => <FeatureCard key={feat.id} {...feat}/>)}
        </div>
    </section>
)
export default Business;