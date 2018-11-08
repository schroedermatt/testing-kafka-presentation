@Configuration
public class DeliveredPackageStream {
	@Bean
	public KStream<String, PackageEvent> deliveredPackage(
			KTable<String, User> usersKTable,
			Serde<PackageEvent> packageEventSerde,
			Serde<User> userSerde,
			StreamsBuilder streamsBuilder
	) {
		return streamsBuilder
				.stream(
						"package-events",
						Consumed.with(Serdes.String(), packageEventSerde)
				)
				.filter((key, event) -> event.getEventType().equals("DELIVERED"))
				.join(
						usersKTable,
						(event, users) -> event,
						Joined.with(Serdes.String(), packageEventSerde, userSerde)
				)
        .to(
						"delivered-package-events",
						Produced.with(Serdes.String(), packageEventSerde)
				);
	}
}