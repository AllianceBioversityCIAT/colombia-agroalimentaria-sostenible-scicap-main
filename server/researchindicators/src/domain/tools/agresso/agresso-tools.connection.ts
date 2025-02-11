import { env } from 'process';
import { Client, createClientAsync } from 'soap';
import { XMLBuilder, XMLParser } from 'fast-xml-parser';
import { ConnectionInterface } from '../../shared/global-dto/base-control-list-save';
import { LoggerUtil } from '../../shared/utils/logger.util';

export class Agresso implements ConnectionInterface {
  private client: Client;
  private readonly xmlToJson: XMLParser;
  private readonly xmlBuilder: XMLBuilder;
  private readonly logger: LoggerUtil = new LoggerUtil({
    name: Agresso.name,
  });

  constructor() {
    this.xmlToJson = new XMLParser();
    this.xmlBuilder = new XMLBuilder();
    this.initializeClient();
  }

  xmlToObject<T>(data: string): Partial<T> {
    return this.xmlToJson.parse(data);
  }

  objectToXml(data: any): string {
    return this.xmlBuilder.build(data);
  }

  private async initializeClient() {
    try {
      this.client = await createClientAsync(
        env.ARI_AGRESSO_URL + 'abwinterface/DataManagementPort?wsdl',
      );
      this.client.addHttpHeader('username', env.ARI_AGRESSO_USER);
      this.client.addHttpHeader('password', env.ARI_AGRESSO_PASS);
    } catch (err) {
      this.logger.error(err);
    }
  }

  async get<T>(methodName: string, args: any = {}): Promise<T> {
    if (!this.client) {
      await this.initializeClient();
    }
    const [result] = await this.client[`${methodName}Async`](args);
    const { return: data } = result;
    return data;
  }
}
