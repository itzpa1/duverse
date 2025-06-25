interface ResourceBase {
    id: string;
    subject: string;
    course: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface PYQ extends ResourceBase {
    subjectViews: number;
    isNep: boolean;
    isSolved: boolean;
    year: number;
    url: string;
}

export interface Note extends ResourceBase {
    subjectViews: number;
    year: number;
    url: string;
}

export interface Video extends ResourceBase {
    isPlaylist: boolean;
    ytUrl: string;
}

export interface Testimonial {
    id: string;
    name: string;
    course: string;
    message: string;
    avatar: string;
    approved: boolean;
    createdAt: Date;
}