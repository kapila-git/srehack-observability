# Microservices with Spring Cloud Demo Project for SREHACK '21 

In this project, you can find 2 Microservices, based on **Spring Boot 1.5** and simple UI component based on **Angular**

## Getting Started 
Currently you may find here some examples of microservices implementation using different projects from Spring Cloud. All the examples are divided into the branches and described in a separated articles on Piomin's blog. Here's a full list of available examples:
1. Introduction to Spring Cloud components like discovery with **Eureka**, load balancing with **Ribbon**, REST client **Feign**, API gataway with **Zuul**. The example is available in the branch [main](https://github.com/kapila-git/srehack-observability/tree/main/microservices). A detailed description can be found here: [Part 1: Creating microservice using Spring Cloud, Eureka and Zuul](https://piotrminkowski.com/2017/02/05/part-1-creating-microservice-using-spring-cloud-eureka-and-zuul/)
2. Introduction to Spring Cloud components used for microservices monitoring like **Spring Cloud Sleuth** and **Zipkin**. Integration with **Logstash** for sending logs to ELK. The example is available in the branch [logstash](https://github.com/piomin/sample-spring-microservices/tree/logstash). A detailed description can be found here: [Part 2: Creating microservices – monitoring with Spring Cloud Sleuth, ELK and Zipkin](https://piotrminkowski.com/2017/04/05/part-2-creating-microservices-monitoring-with-spring-cloud-sleuth-elk-and-zipkin/)
3. Introduction to load balancing with **Ribbon** and **Feign** declarative HTTP client, circuit braker and fallback with **Hystrix**. The example is available in the branch [hystrix](https://github.com/piomin/sample-spring-microservices/tree/hystrix). A detailed description can be found here: [Part 3: Creating Microservices: Circuit Breaker, Fallback and Load Balancing with Spring Cloud](https://piotrminkowski.com/2017/05/15/part-3-creating-microservices-circuit-breaker-fallback-and-load-balancing-with-spring-cloud/)
4. Using tool **Spring Boot Admin** for managing and monitoring microservices-based system. The example is available in the branch [admin](https://github.com/piomin/sample-spring-microservices/tree/admin). A detailed description can be found here: [Monitoring Microservices With Spring Boot Admin](https://piotrminkowski.com/2017/06/26/monitoring-microservices-with-spring-boot-admin/)
5. Deploying and running Spring Boot microservices on **Kubernetes** including inter-service communication using **Feign** client and integration with database **Mongo**. The example is available in the branch [kubernetes](https://github.com/piomin/sample-spring-microservices/tree/kubernetes). A detailed description can be found here: [Microservices with Kubernetes and Docker](https://piotrminkowski.com/2017/03/31/microservices-with-kubernetes-and-docker) 


### Usage

In the most cases you need to have Maven, JDK8+ and Docker for running third-party software like Zipkin or Logstash. In the fifth example with Kubernetes you will have to run **Minikube** on your local machine. The best way to run the sample applications is with IDEs like IntelliJ IDEA or Eclipse.  

### How to Run

docker-compose up

If you want to change anything on any service(s), you need to build the service(s) you changed and then :

docker-compose build

docker-compose up

docker-compose down

If you want to run UI component :

npm run ng serve

ng serve

Make sure to change the base URL of Angular component to point your Microservices.

## Architecture

Our sample microservices-based system consists of the following modules:
- **gateway-service** - a module that Spring Cloud Netflix Zuul for running Spring Boot application that acts as a proxy/gateway in our architecture.
- **config-service** - a module that uses Spring Cloud Config Server for running configuration server in the `native` mode. The configuration files are placed on the classpath.
- **discovery-service** - a module that depending on the example it uses Spring Cloud Netflix Eureka as an embedded discovery server.
- **account-service** - a module containing the first of our sample microservices that allows to perform CRUD operation on in-memory repository of accounts
- **customer-service** - a module containing the second of our sample microservices that allows to perform CRUD operation on in-memory repository of customers. It communicates with account-service. 
- **zipkin-service** - a module that runs embedded Zipkin instance.

The following picture illustrates the architecture described above.

<img src="https://piotrminkowski.files.wordpress.com/2017/02/san1s57hfsas5v53ms53.png" title="Architecture"/><br/>

In case of Kubernetes deployment we use only some of Spring Cloud components like Spring Cloud **Feign** or **Sleuth** without discovery or config server.

<img src="https://piotrminkowski.files.wordpress.com/2017/03/kube_micro.png?w=768&h=528" title="Kube"/>

## Try with your own Microservices
If you want to try implementing observability in your own Microservices rather than using provided Microservices, you are required to present followings at first evaluation checkpoint.

1. High-level design of the system
2. Architecture diagram

## OpenTelemetry
OpenTelemetry (also referred to as OTel) is an open-source observability framework made up of a collection of tools, APIs, and SDKs, that enables IT teams to instrument, generate, collect, and export telemetry data for analysis and understand software performance and behavior.

### Telemetry data
Capturing data is critical to understanding how your applications and infrastructure are performing at any given time. This information is gathered from remote, often inaccessible points within your ecosystem and processed by some sort of tool or equipment. Monitoring begins here. The data is incredibly plentiful and difficult to store over long periods due to capacity limitations — a reason why private and public cloud storage services have been a boon to DevOps teams.

Logs, metrics, and traces make up the bulk of all telemetry data.

**Logs** are important because you’ll naturally want an event-based record of any notable anomalies across the system. Structured, unstructured, or in plain text, these readable files can tell you the results of any transaction involving an endpoint within your multicloud environment. However, not all logs are inherently reviewable — a problem that’s given rise to external log analysis tools.

**Metrics** are numerical data points represented as counts or measures that are often calculated or aggregated over a period of time. Metrics originate from several sources including infrastructure, hosts, and third-party sources. While logs aren’t always accessible, most metrics tend to be reachable via query. Timestamps, values, and even event names can preemptively uncover a growing problem that needs remediation.

**Traces** are the act of following a process (for example, an API request or other system activity) from start to finish, showing how services connect. Keeping watch over this pathway is critical to understanding how your ecosystem works, if it’s working effectively, and if any troubleshooting is necessary. Span data is a hallmark of tracing — which includes information such as unique identifiers, operation names, timestamps, logs, events, and indexes.

(Ref: https://www.dynatrace.com/news/blog/what-is-opentelemetry-2/)

## Open-source monitoring tools with visualizations
Monitoring — the process of gathering telemetry data on the operation of an IT environment to gauge performance and troubleshoot issues — is a perfect example of how open source acts as both a driver and enabler of DevOps methodologies. Today, engineers can select from a huge and ever-growing number of open source tools to help them with various elements involved in monitoring–from databases, to user interfaces, to instrumentation frameworks, to data collectors and monitoring agents

There are various open-source monitoring tools available. Few of them are;
1. Grafana
2. Prometheus
3. Jaeger
4. APM

(Ref: https://logz.io/blog/open-source-monitoring-tools/)

## Resources

1. OpenTelemetry - [https://opentelemetry.io/](https://opentelemetry.io/)
2. Elasticsearch - [https://www.elastic.co/elastic-stack/](https://www.elastic.co/elastic-stack/)
3. Prometheus - [https://prometheus.io/](https://prometheus.io/) 
4. Grafana - [https://grafana.com/](https://grafana.com/)
5. NPM - [https://www.npmjs.com/](https://www.npmjs.com/)
6. Maven - [https://maven.apache.org/](https://maven.apache.org/)
7. Docker - [https://www.docker.com/](https://www.docker.com/)
8. Kubernetes - [https://kubernetes.io/](https://kubernetes.io/)
