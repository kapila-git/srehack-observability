FROM openjdk:8u312-jdk-oraclelinux7
ADD target/*.jar zipkin-service.jar
EXPOSE 9411
ENTRYPOINT ["java", "-jar", "/zipkin-service.jar"]
