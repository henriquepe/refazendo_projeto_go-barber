import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

interface createAppointmentDTO {
	provider: string;
	date: Date;
}

export default class AppointmentsRepository {
	private appointments: Appointment[];

	constructor() {
		this.appointments = [];
	}

	public create({ provider, date }: createAppointmentDTO): Appointment {
		const appointment = new Appointment(provider, date);

		this.appointments.push(appointment);

		return appointment;
	}

	public find(date: Date): Appointment | null {
		const appointmentInSameDate = this.appointments.find(appointment => {
			return isEqual(date, appointment.date);
		});

		return appointmentInSameDate || null;
	}

	public all(): Appointment[] {
		return this.appointments;
	}
}
