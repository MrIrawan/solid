export interface staticFeaturesData {
    id: number;
    title: string;
    description: string;
    icon: string;
}

export interface staticTestimonialData {
    name: string;
    role: string;
    avatar: string;
    testimonial: string;
    stars: number;
}

export interface staticWorkProccessData {
    id: number;
    title: string;
    description: string;
    image: string;
    gridClassname: string;
    titleClassname: string;
    numberClassname: string;
}

export interface ContactUsData {
    full_name: string;
    email: string;
    company_name: string;
    subject_message: string;
    message: string;
}