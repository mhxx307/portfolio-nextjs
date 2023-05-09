import { Fade, Head, TextSpan } from '@/components/shared';
import { useMemo, useRef, useState } from 'react';
import { BsExclamationLg, BsPatchCheckFill } from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import { RiSendPlane2Fill } from 'react-icons/ri';
import dynamic from 'next/dynamic';
import { toast } from 'react-toastify';

interface FormState {
    name: string;
    email: string;
    subject: string;
    message: string;
}

function Contact() {
    const Map = useMemo(
        () =>
            dynamic(
                () => import('../components/shared/Map'), // replace '@components/map' with your component's location
                {
                    loading: () => <p>A map is loading</p>,
                    ssr: false, // This line is important. It's what prevents server-side render
                },
            ),
        [],
    );
    const [validInput, setValidInput] = useState<FormState>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setValidInput((preValue) => {
            return { ...preValue, [name]: value };
        });
    };

    // select all the input with useRef Hook
    const emailRef = useRef<any>(null);
    const TextAreaRef = useRef<any>(null);
    const form = useRef(null);

    // Error function
    const setError = (inputRef: any) => {
        if (inputRef.current.parentElement.classList.contains('success')) {
            inputRef.current.parentElement.classList.remove('success');
        } else {
            inputRef.current.parentElement.classList.add('error');
        }
    };

    // success Function
    const setSuccess = (inputRef: any) => {
        if (inputRef.current.parentElement.classList.contains('error')) {
            inputRef.current.parentElement.classList.remove('error');
        } else {
            inputRef.current.parentElement.classList.add('success');
        }
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { email, message } = validInput;
        // const pattern = /^[^]+@[^]+\.[a-z]{2,3}$/
        const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!email && !message) {
            setError(emailRef);
            setError(TextAreaRef);
            toast.error('Pls! fill in the required inputs');
        } else if (!email && message) {
            setError(emailRef);
            toast.error('Ooops! Email can not be empty');
        } else if (!email.match(pattern)) {
            setError(emailRef);
            toast.error('Ooops! Email not valid');
        } else if (!message && email.match(pattern)) {
            setError(TextAreaRef);
            toast.error('Leave a message pls!');
        } else if (email && !message) {
            setError(TextAreaRef);
            toast.error('por favor! enviar un mensaje');
        } else if (email && message) {
            if (form.current) {
                emailjs.sendForm(
                    process.env.REACT_APP_EMAILJS_SERVICE as string,
                    process.env.REACT_APP_EMAILJS_TEMPLATE as string,
                    form.current,
                    process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string,
                );
                setSuccess(emailRef);
                setSuccess(TextAreaRef);
                toast.success('Message sent successfully');
            }

            setValidInput({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
        }
    };

    return (
        <>
            <Head
                title="Thông tin liên lạc của La Võ Minh Quân"
                description="La Võ Minh Quân là một developer, blogger trẻ với nhiều tham vọng."
            />
            <section className="contact-section">
                <div className="fake-big">@</div>
                <form
                    ref={form}
                    className="contact-form pt-[100px]"
                    onSubmit={onSubmit}
                >
                    <div>
                        <h2
                            aria-label="contact me"
                            className="contact__heading text-colorTem"
                        >
                            <TextSpan text="Contact" />
                        </h2>
                        <Fade direction="bottom">
                            <p>
                                {/* I’m interested in freelance opportunities and I am
                                always ready to build projects at anytime, if you
                                have any job offer for me, you could use the form
                                below to react out to me. */}
                                Tôi quan tâm đến cơ hội làm việc tự do và tôi
                                luôn sẵn sàng xây dựng các dự án bất cứ lúc nào,
                                nếu bạn có bất kỳ cơ hội việc làm nào cho tôi,
                                bạn có thể sử dụng biểu mẫu bên dưới để liên hệ
                                với tôi.
                            </p>
                        </Fade>
                    </div>
                    <div className="relative mt-16 before:absolute before:left-[-2rem] before:mt-[-2rem] before:font-belle before:text-[18px] before:text-[#515152] before:content-['<form>']  after:absolute after:bottom-[-2rem] after:left-[-2rem] after:font-belle after:text-[18px] after:text-[#515152] after:content-['<form>']">
                        <Fade direction="bottom">
                            <div className="input-wrapper">
                                <div className="form-input-group">
                                    <input
                                        autoComplete="false"
                                        type="text"
                                        placeholder="Name"
                                        name="user_name"
                                        value={validInput.name}
                                        onChange={handleChange}
                                    />
                                    <span className="bg-colorTem"></span>
                                    <BsExclamationLg className="exclamation" />
                                    <BsPatchCheckFill className="checkCircle" />
                                </div>

                                <div className="form-input-group">
                                    <input
                                        autoComplete="false"
                                        ref={emailRef}
                                        type="email"
                                        placeholder="Email"
                                        name="user_email"
                                        value={validInput.email}
                                        onChange={handleChange}
                                    />
                                    <span className="bg-colorTem"></span>
                                    <BsExclamationLg className="exclamation" />
                                    <BsPatchCheckFill className="checkCircle" />
                                </div>
                            </div>
                        </Fade>
                        <Fade direction="bottom">
                            <div className="form-input-group">
                                <input
                                    autoComplete="false"
                                    type="text"
                                    placeholder="Subject"
                                    name="user_subject"
                                    value={validInput.subject}
                                    onChange={handleChange}
                                />
                                <span className="bg-colorTem"></span>
                                <BsExclamationLg className="exclamation" />
                                <BsPatchCheckFill className="checkCircle" />
                            </div>
                        </Fade>
                        <Fade direction="bottom">
                            <div className="form-input-group">
                                <textarea
                                    id="messageArea"
                                    autoComplete="false"
                                    ref={TextAreaRef}
                                    placeholder="Message"
                                    name="message"
                                    value={validInput.message}
                                    onChange={handleChange}
                                    className="mb-[10px] h-[25vh] w-full border-none bg-[#2b2b2b] fill-[#8d8d8d] px-[20px] py-[10px] text-sm shadow-shadowCustom2 outline-none"
                                />
                                <span className="bg-colorTem"></span>
                                <BsExclamationLg className="exclamation" />
                                <BsPatchCheckFill className="checkCircle" />
                            </div>
                        </Fade>
                        <Fade direction="left" className="flex justify-end">
                            <button
                                type="submit"
                                className="animation__fadeInBackwards relative mx-0 my-[30px] block h-[50px] w-full max-w-[200px] whitespace-nowrap leading-[50px]"
                            >
                                <div className="border__radius group relative h-full w-full overflow-hidden">
                                    <span className="transform__skew group-hover:border__radius absolute -left-[5%] top-0 h-full w-0 group-hover:w-[110%] group-hover:bg-colorTem " />
                                    <span className="border__radius absolute left-0 top-0 h-full w-full border-[1px] border-solid border-colorTem" />
                                    <span className="absolute left-0 flex h-full w-full items-center justify-center text-center hover:text-[#2d2b2b]">
                                        <RiSendPlane2Fill className="mr-2" />
                                        <span>Gửi tin nhắn</span>
                                    </span>
                                </div>
                            </button>
                        </Fade>
                    </div>
                    <Fade direction="bottom">
                        <footer className="footer">
                            <p>
                                {' '}
                                &copy; copyright All Right Reserved Almarex -
                                2022
                            </p>
                        </footer>
                    </Fade>
                </form>
                <div className="google-map">
                    <Map />
                </div>
            </section>
        </>
    );
}

export default Contact;
