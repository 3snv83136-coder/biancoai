import { services } from './servicesData';

export const servicesList = services.map((s) => ({ id: s.id, title: s.title }));
