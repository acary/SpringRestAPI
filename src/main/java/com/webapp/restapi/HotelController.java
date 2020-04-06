package com.webapp.restapi;

import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

import com.webapp.restapi.models.*;
import com.webapp.restapi.repository.*;

@RestController
@RequestMapping("/hotels")
public class HotelController {
    private HotelRepository hotelRepository;

    public HotelController(HotelRepository hotelRepository) {
        this.hotelRepository = hotelRepository;
    }

    @GetMapping("/all")
    public List<Hotel> getAll(){
        List<Hotel> hotels = this.hotelRepository.findAll();

        return hotels;
    }

    @PostMapping
    public void insert(@RequestBody Hotel hotel){
        this.hotelRepository.save(hotel);
    }

    @PutMapping
    public void update(@RequestBody Hotel hotel){
        this.hotelRepository.insert(hotel);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Hotel id){
        this.hotelRepository.delete(id);
    }

    @GetMapping("/{id}")
    public Optional<Hotel> getById(@PathVariable("id") Hotel id){
        Optional<Hotel> hotel = this.hotelRepository.findById(id);

        return hotel;
    }

    @GetMapping("/price/{maxPrice}")
    public List<Hotel> getByPricePerNight(@PathVariable("maxPrice") int maxPrice){
        List<Hotel> hotels = this.hotelRepository.findByPricePerNightLessThan(maxPrice);

        return hotels;
    }

    @GetMapping("/address/{city}")
    public List<Hotel> getByCity(@PathVariable("city") String city){
        List<Hotel> hotels = this.hotelRepository.findByCity(city);

        return hotels;
    }

//    @GetMapping("/country/{country}")
//    public List<Hotel> getByCountry(@PathVariable("country") String country){
//        // create a query class (QHotel)
//        QHotel qHotel = new QHotel("hotel");
//
//        // using the query class we can create the filters
//        BooleanExpression filterByCountry = qHotel.address.country.eq(country);
//
//        // we can then pass the filters to the findAll() method
//        List<Hotel> hotels = (List<Hotel>) this.hotelRepository.findAll(filterByCountry);
//
//        return hotels;
//    }
//
//    @GetMapping("/recommended")
//    public List<Hotel> getRecommended(){
//        final int maxPrice = 100;
//        final int minRating = 7;
//
//        // create a query class (QHotel)
//        QHotel qHotel = new QHotel("hotel");
//
//        // using the query class we can create the filters
//        BooleanExpression filterByPrice = qHotel.pricePerNight.lt(maxPrice);
//        BooleanExpression filterByRating = qHotel.reviews.any().rating.gt(minRating);
//
//        // we can then pass the filters to the findAll() method
//        List<Hotel> hotels = (List<Hotel>) this.hotelRepository.findAll(filterByPrice.and(filterByRating));
//
//        return hotels;
//    }
}