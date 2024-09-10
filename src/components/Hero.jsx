import ActionButton from "./ActionButton";
import WorkingFlow from "./WorkingFlow";

const Hero = () => {
    return <>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">⚡️Supercharge your Gmail</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-24 dark:text-gray-400">Turbocharge your Gmail! GmailGenius scans new emails, instantly zapping important emails to the right team - all while you sip your coffee.</p>
        <WorkingFlow />
        <div className="my-10">
            <ActionButton displayName={"Get started"} link={"#"} />
        </div>
        <iframe className="m-auto md:min-w-[854px] md:min-h-[500px]" src="https://drive.google.com/file/d/1ktEc7Rmw7Hzg_1tHGW3OpKDio6gjBN3A/preview" allow="autoplay"></iframe>
    </>
}

export default Hero;