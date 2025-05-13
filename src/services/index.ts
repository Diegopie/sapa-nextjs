import * as apiServices from './api';
import * as mockServices from './mock';
import { Events } from '@models/index';

const useMockServices = process.env.NEXT_PUBLIC_USE_MOCK_API === 'true'

interface EventService {
  getEvents: (limit?: number) => Promise<Events[]>;
}

export const services = {
  eventsService: (useMockServices ? mockServices : apiServices) as EventService
};
