export interface Career {
    title: string;
    company: string;
    country: string;
    description: string;
    startDate: Date;
    endDate?: Date;
    tasks: Array<string>;
}