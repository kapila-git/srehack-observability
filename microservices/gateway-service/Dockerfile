FROM openjdk:8u312-jdk-oraclelinux7
ADD target/gateway-service.jar gateway-service.jar
EXPOSE 8765
ENTRYPOINT ["java", "-jar", "/gateway-service.jar"]
