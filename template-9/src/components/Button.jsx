
const Button = ({ styles }) => (
    <button className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] 
    text-primary outline-none ${styles} rounded-[10px]`} type="button" aria-label="Get Started" tabIndex="0">
        Get Started
    </button>
)

export default Button