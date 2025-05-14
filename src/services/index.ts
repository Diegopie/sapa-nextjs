import * as apiServices from './api';
import * as mockServices from './mock';
import { Events, Pharmacy } from '@models/index';

const useMockServices = process.env.NEXT_PUBLIC_USE_MOCK_API === 'true'

interface EventService {
  getEvents: (limit?: number) => Promise<Events[]>;
}

interface PharmacyService {
  getPharmacies: (limit?: number) => Promise<Pharmacy[]>;
}

export const services = {
  eventsService: (useMockServices ? mockServices : apiServices) as EventService,
  pharmacyService: (useMockServices ? mockServices : apiServices) as PharmacyService
};
