export interface Appointment{
    Appo_ID: number,
    startTime: string,
    endTime: string,
    Appo_Period: string,
    Appo_PeriodAr:string,
    isclosed: boolean,
    ISDr_Shift: boolean,
    IsReserved: boolean,
    TeleMedConsult_Price:number
}


export interface DoctorAppointments{
    Date: string,
    DoctorAppointments:Appointment[]
}


export interface DoctorAppointmentsList{
    DoctorAppointments:DoctorAppointments[]
}